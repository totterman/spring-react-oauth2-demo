import { NavLink } from 'react-router-dom';

type Props = {
  to?: string;
  children?: string;
};
export default function MenuItem({ to = '', children }: Props) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `mr-6 text-white no-underline p-1 pb-0.5 border-solid border-b-2 ${
          isActive ? 'border-white' : 'border-transparent'
        }`
      }
    >
      {children}
    </NavLink>
  );
}
