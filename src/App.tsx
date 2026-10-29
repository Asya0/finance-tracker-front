import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { Header } from './components/layout/header';
import Dashboard from './pages/Dashboard';
import Operations from './pages/Operations';
import ProtectedRoute from './components/ProtectedRoute';
import LoginModal from './components/ui/modals/LoginModal';
import RegisterModal from './components/ui/modals/RegisterModal';

function AppContent() {
   const { isLoginOpen, isRegisterOpen, closeModals } = useAuth();
   return (
      <>
         <Routes>
            <Route element={<Header />}>
               <Route path="/" element={<Navigate to="/dashboard" replace />} />
               <Route path="/dashboard" element={<Dashboard />} />

               <Route
                  path="/operations"
                  element={
                     <ProtectedRoute>
                        <Operations />
                     </ProtectedRoute>
                  }
               />
            </Route>
         </Routes>

         <LoginModal isOpen={isLoginOpen} onClose={closeModals} />
         <RegisterModal isOpen={isRegisterOpen} onClose={closeModals} />
      </>
   );
}

export default function App() {
   return (
      <AuthProvider>
         <AppContent />
      </AuthProvider>
   );
}
