import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login as apiLogin, registration as apiRegistration } from '../api/auth';

interface User {
   id: string;
   email: string;
   name?: string;
}

interface AuthContextType {
   user: User | null;
   isLoginOpen: boolean;
   isRegisterOpen: boolean;
   openLogin: () => void;
   openRegister: () => void;
   closeModals: () => void;
   login: (email: string, password: string) => Promise<void>;
   registration: (email: string, password: string) => Promise<void>;
   logout: () => void;
   isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
   const [user, setUser] = useState<User | null>(null);
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const [isLoginOpen, setIsLoginOpen] = useState(false);
   const [isRegisterOpen, setIsRegisterOpen] = useState(false);

   const navigate = useNavigate();

   const openLogin = () => {
      setIsRegisterOpen(false);
      setIsLoginOpen(true);
   };
   const openRegister = () => {
      setIsLoginOpen(false);
      setIsRegisterOpen(true);
   };
   const closeModals = () => {
      setIsRegisterOpen(false);
      setIsLoginOpen(false);
   };

   const login = async (email: string, password: string) => {
      try {
         const response = await apiLogin(email, password);

         setUser(response.user);
         setIsAuthenticated(true);

         closeModals();
         navigate('/dashboard');
      } catch (error) {
         console.error('Ошибка входа:', error);
      }
   };

   const registration = async (email: string, password: string) => {
      try {
         const response = await apiRegistration(email, password);

         setUser(response.user);
         setIsAuthenticated(true);

         closeModals();
         navigate('/dashboard');
      } catch (error) {
         console.error('Ошибка входа:', error);
      }
   };

   const logout = () => {
      setUser(null);
      setIsAuthenticated(false);
      closeModals();
      navigate('/');
   };

   return (
      <AuthContext.Provider
         value={{
            user,
            isLoginOpen,
            isRegisterOpen,
            openLogin,
            openRegister,
            closeModals,
            login,
            registration,
            logout,
            isAuthenticated,
         }}
      >
         {children}
      </AuthContext.Provider>
   );
}
export const useAuth = () => {
   const context = useContext(AuthContext);
   if (!context) throw new Error('useAuth должен использоваться внутри AuthProvider');
   return context;
};
