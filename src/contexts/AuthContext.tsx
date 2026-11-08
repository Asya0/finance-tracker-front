import { createContext, useContext, useState } from 'react';

interface AuthContextType {
   user: any | null; // почему any?
   isLoginOpen: boolean;
   isRegisterOpen: boolean;
   openLogin: () => void; // в чем отличие от isLoginOpen?
   openRegister: () => void;
   closeModals: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
   const [user, setUser] = useState<any | null>(null); // что значит этот формат записи - <any | null>(null)?
   const [isLoginOpen, setIsLoginOpen] = useState(false);
   const [isRegisterOpen, setIsRegisterOpen] = useState(false);

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
   return (
      <AuthContext.Provider
         value={{ user, isLoginOpen, isRegisterOpen, openLogin, openRegister, closeModals }}
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
