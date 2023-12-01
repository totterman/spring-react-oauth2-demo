import { createContext, useContext, useReducer, ReactNode } from 'react';
import { User } from './getMe';
import { LoginOptions } from './getLoginOptions';

/*
 * User login status
 */
type State = {
  user: undefined | User;
  loading: boolean;
  options: undefined | LoginOptions[];
};

const initialState: State = {
  user: undefined,
  loading: false,
  options: undefined,
};

/*
 * State machine for the OAuth2 login flow
 */
type Action =
  | {
      type: 'findprovider';
    }
  | {
      type: 'hasprovider';
      options: LoginOptions[] | undefined;
    }
  | {
      type: 'login';
    }
  | {
      type: 'loggedin';
      user: User | undefined;
    }
  | {
      type: 'logout';
    };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'findprovider':
      return { ...state, loading: true };
    case 'hasprovider':
      return { ...state, loading: false, options: action.options };
    case 'login':
      return { ...state, loading: true };
    case 'loggedin':
      return {
        ...state,
        loading: false,
        user: action.user,
      };
    case 'logout':
      return {
        user: undefined,
        loading: false,
        options: undefined,
      };

    default:
      return state;
  }
}

type UserContextType = State & {
  dispatch: React.Dispatch<Action>;
};

const UserContext = createContext<UserContextType>({
  ...initialState,
  dispatch: () => {},
});

type Props = {
  children: ReactNode;
};

/*
 * Provides current user context system for the App
 */
export function UserProvider({ children }: Props) {
  const [{ user, loading, options }, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        options,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const NOT_LOGGED_IN: User = { username: '', roles: [], exp: 0 };
export const ANONYMOUS: User = { username: 'Anonymous', roles: ['public'], exp: 0 };

/*
 * Provides current user context for app functions
 */
export const useUserContext = () => useContext(UserContext);
