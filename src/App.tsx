import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { Header } from './components/layout/header';
import Dashboard from './pages/Dashboard';
import Operations from './pages/Operations';
import ProtectedRoute from './components/ProtectedRoute';
import LoginModal from './components/ui/modals/LoginModal';
import RegisterModal from './components/ui/modals/RegisterModal';
import Profile from './pages/Profile';

function AppContent() {
   const { activeModal, closeModal } = useAuth();
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
               <Route
                  path="/profile"
                  element={
                     <ProtectedRoute>
                        <Profile />
                     </ProtectedRoute>
                  }
               />
            </Route>
         </Routes>

         <LoginModal isOpen={activeModal === 'login'} onClose={closeModal} />
         <RegisterModal isOpen={activeModal === 'register'} onClose={closeModal} />
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
