import { useAuth } from '@/contexts/AuthContext';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
   const { user, openLogin } = useAuth();

   if (!user) {
      openLogin(); // если пользователя нет - открывам модалку входа
      return null; // ничего не рендерим пока не авторизуются
   }
   return <>{children}</>;
};
export default ProtectedRoute;
