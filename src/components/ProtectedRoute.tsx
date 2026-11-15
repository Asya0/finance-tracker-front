import { useAuth } from '@/contexts/AuthContext';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
   const [isModalOpened, setIsModalOpened] = useState(false);
   const { isAuthenticated, openModal, activeModal } = useAuth();

   useEffect(() => {
      if (!isAuthenticated && activeModal === null && !isModalOpened) {
         openModal('login');
         setIsModalOpened(true);
      }
   }, [isAuthenticated, openModal, activeModal]);

   if (isAuthenticated) {
      return <>{children}</>;
   }

   if (isModalOpened && activeModal === null) {
      return <Navigate to="/dashboard" replace />;
   }

   return null;
};
export default ProtectedRoute;
