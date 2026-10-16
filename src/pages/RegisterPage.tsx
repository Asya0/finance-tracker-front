import AuthForm  from '@/components/domain/сredentials-form';
import { registration } from '@/api/auth';

export default function RegisterPage() {
   const onSubmit = (email: string, password: string) => {
      registration(email, password);
   };
   return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4">
         <AuthForm
            title="Регистрация"
            description="Введите ваш email для доступа к Finance Tracker"
            buttonText="Зарегистрироваться"
            onSubmit={onSubmit}
         />
      </div>
   );
}
