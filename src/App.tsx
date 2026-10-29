import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { Header } from './components/layout/header';
import { useState } from 'react';

function App() {
   const [isLoginOpen, setIsLoginOpen] = useState(false);
   const [isRegisterOpen, setIsRegisterOpen] = useState(false);
   // return <LoginPage />;
   // return <RegisterPage />;

   return (
      <Header
         onOpenLogin={() => setIsLoginOpen(true)}
         onOpenRegister={() => setIsRegisterOpen(true)}
      />
   );
}

export default App;
