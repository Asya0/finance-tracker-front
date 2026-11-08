import { useAuth } from '@/contexts/AuthContext';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
   const { isAuthenticated, openLogin } = useAuth();

   useEffect(() => {
      if (!isAuthenticated) {
         openLogin();
      }
   }, [isAuthenticated, openLogin]);

   if (!isAuthenticated) {
      return null;
   }
   return <>{children}</>;
};
export default ProtectedRoute;
