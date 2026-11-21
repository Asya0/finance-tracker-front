import { CredentialsForm } from '@/components/domain/credentials-form';
import { useAuth } from '@/contexts/AuthContext';

export const LoginPage = () => {
   const { login, openModal } = useAuth();
   const onSubmit = (email: string, password: string) => {
      login(email, password);
   };
   return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4">
         <CredentialsForm
            title="Вход в систему"
            description="Введите ваш email для доступа к Finance Tracker"
            buttonText="Войти"
            onSubmit={onSubmit}
            question="Нет аккаунта?"
            actionText="Зарегистрироваться"
            onSwitch={() => {
               openModal('register');
            }}
         />
      </div>
   );
};
