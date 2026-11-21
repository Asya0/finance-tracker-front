import { registration } from '@/api/auth';
import { CredentialsForm } from '@/components/domain/credentials-form';

export const RegisterPage = () => {
   const onSubmit = (email: string, password: string) => {
      registration(email, password);
   };
   return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4">
         <CredentialsForm
            title="Регистрация"
            description="Введите ваш email для доступа к Finance Tracker"
            buttonText="Зарегистрироваться"
            question=""
            actionText=""
            onSwitch={() => {}}
            onSubmit={onSubmit}
         />
      </div>
   );
};
