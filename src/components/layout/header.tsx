import Button from '../ui/button';

interface HeaderProps {
   onOpenLogin: () => void;
   onOpenRegister: () => void;
}
export function Header({ onOpenLogin, onOpenRegister }: HeaderProps) {
   return (
      <header className="header">
         <div className="logo">Finance tracker</div>

         <nav className="nav"></nav>

         <div className="auth">
            <Button type="button" onClick={onOpenLogin}>
               Войти
            </Button>
         </div>
         <div className="auth">
            <Button type="button" onClick={onOpenRegister}>
               Зарегестрироваться
            </Button>
         </div>
      </header>
   );
}
