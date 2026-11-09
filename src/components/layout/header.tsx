import { Outlet, NavLink } from 'react-router-dom';
import Button from '../ui/button/button';
import { useAuth } from '@/contexts/AuthContext';
import './header.css';

const NAV_ITEMS = [
   { path: '/dashboard', label: 'Главная' },
   { path: '/operations', label: 'Операции' },
   { path: '/profile', label: 'Профиль' },
];

export function Header() {
   const { openModal, isAuthenticated, user, logout } = useAuth();

   return (
      <div className="app-layout">
         <header className="header">
            <div className="header-inner">
               <div className="logo">Finance Tracker</div>

               <nav className="nav">
                  {NAV_ITEMS.map(({ path, label }) => (
                     <NavLink
                        key={path}
                        to={path}
                        className={({ isActive }) =>
                           `nav-link ${isActive ? 'nav-link--active' : ''}`
                        }
                     >
                        {label}
                     </NavLink>
                  ))}
               </nav>

               {isAuthenticated && user ? (
                  <div className="auth-section">
                     <span className="user-name">{user.name ?? user.email}</span>
                     <Button variant="secondary" onClick={logout}>
                        Выйти
                     </Button>
                  </div>
               ) : (
                  <div className="auth-buttons">
                     <Button variant="primary" onClick={() => openModal('login')}>
                        Войти
                     </Button>
                  </div>
               )}
            </div>
         </header>

         <main className="page-content">
            <Outlet />
         </main>
      </div>
   );
}
