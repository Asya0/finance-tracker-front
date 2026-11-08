// import { Outlet, Link } from 'react-router-dom';
// import Button from '../ui/button/button';
// import { useAuth } from '@/contexts/AuthContext';
// import './header.css';

// export function Header() {
//    const { openLogin, openRegister } = useAuth();
//    return (
//       <div className="app-layout">
//          <header className="header">
//             <div className="logo">Finance tracker</div>

//             <nav className="nav">
//                <Link to="/dashboard" className="nav-link">
//                   Главная
//                </Link>
//                <Link to="/operations" className="nav-link">
//                   Операции
//                </Link>
//                <Link to="/profile" className="nav-link">
//                   Профиль
//                </Link>
//             </nav>

//             <div className="auth">
//                <Button type="button" onClick={openLogin}>
//                   Войти
//                </Button>
//             </div>
//             <div className="registration">
//                <Button type="button" onClick={openRegister}>
//                   Зарегистрироваться
//                </Button>
//             </div>
//          </header>

//          <main className="page-content">
//             <Outlet />
//          </main>
//       </div>
//    );
// }

import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import Button from '../ui/button/button';
import { useAuth } from '@/contexts/AuthContext';
import './header.css';

const NAV_ITEMS = [
   { path: '/dashboard', label: 'Главная' },
   { path: '/operations', label: 'Операции' },
   { path: '/profile', label: 'Профиль' },
];

export function Header() {
   const { openLogin, openRegister, isAuthenticated, user, logout } = useAuth();

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
                     <Button variant="primary" onClick={openLogin}>
                        Войти
                     </Button>
                     <Button variant="primary" onClick={openRegister}>
                        Зарегистрироваться
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
