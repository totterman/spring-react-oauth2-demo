import './App.css';
import { Header } from './pages/Header';
import { Outlet } from 'react-router-dom';
import { UserProvider } from './auth/UserContext';

/*
 * Navigation comes from the Routes component
 * UserProvider keeps the current logged in user in the UserContext
 */
function App() {
  return (
    <UserProvider>
      <Header />
      <Outlet />
    </UserProvider>
  );
}

export default App;
