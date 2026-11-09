import { useAuth } from '@/contexts/AuthContext';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
   const { isAuthenticated, openModal, activeModal } = useAuth();

   useEffect(() => {
      if (!isAuthenticated && activeModal === null) {
         openModal('login');
      } 
   }, [isAuthenticated, openModal, activeModal]);

   if (!isAuthenticated) {
      return null;
   }
   return <>{children}</>;
};
export default ProtectedRoute;
