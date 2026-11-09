import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login as apiLogin, registration as apiRegistration } from '../api/auth';

type AuthModal = 'login' | 'register' | null;

interface User {
   id: string;
   email: string;
   name?: string;
}

interface AuthContextType {
   user: User | null;
   isAuthenticated: boolean;
   activeModal: AuthModal;
   openModal: (modal: Exclude<AuthModal, null>) => void;
   closeModal: () => void;
   login: (email: string, password: string) => Promise<void>;
   registration: (email: string, password: string) => Promise<void>;
   logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
   const [user, setUser] = useState<User | null>(null);
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const [activeModal, setActiveModal] = useState<AuthModal>(null);

   const navigate = useNavigate();

   const openModal = useCallback((modal: Exclude<AuthModal, null>) => {
      setActiveModal(modal);
   }, []);
   const closeModal = useCallback(() => setActiveModal(null), []);

   const login = useCallback(async (email: string, password: string) => {
      try {
         const response = await apiLogin(email, password);

         setUser(response.user);
         setIsAuthenticated(true);

         closeModal();
      } catch (error) {
         console.error('Ошибка входа:', error);
      }
   }, []);
   const registration = useCallback(async (email: string, password: string) => {
      try {
         const response = await apiRegistration(email, password);

         setUser(response.user);
         setIsAuthenticated(true);

         closeModal();
      } catch (error) {
         console.error('Ошибка входа:', error);
      }
   }, []);

   const logout = useCallback(() => {
      setUser(null);
      setIsAuthenticated(false);
      closeModal();
      navigate('/');
   }, [closeModal, navigate]);

   const value = useMemo(
      () => ({
         user,
         isAuthenticated,
         activeModal,
         openModal,
         closeModal,
         login,
         registration,
         logout,
      }),
      [user, isAuthenticated, activeModal, openModal, closeModal, login, registration, logout],
   );

   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export const useAuth = () => {
   const context = useContext(AuthContext);
   if (!context) throw new Error('useAuth должен использоваться внутри AuthProvider');
   return context;
};
