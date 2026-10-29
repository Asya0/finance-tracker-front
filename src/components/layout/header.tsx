import { Outlet } from 'react-router-dom';
import Button from '../ui/button/button';
import { useAuth } from '@/contexts/AuthContext';
import './header.css';

export function Header() {
   const { openLogin, openRegister } = useAuth();
   return (
      <div className="app-layout">
         <header className="header">
            <div className="logo">Finance tracker</div>

            <nav className="nav"></nav>

            <div className="auth">
               <Button type="button" onClick={openLogin}>
                  Войти
               </Button>
            </div>
            <div className="registration">
               <Button type="button" onClick={openRegister}>
                  Зарегистрироваться
               </Button>
            </div>
         </header>

         <main className="page-content">
            <Outlet />
         </main>
      </div>
   );
}
