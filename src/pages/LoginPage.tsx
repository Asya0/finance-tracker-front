import AuthForm  from '../components/domain/сredentials-form';
import { login } from '@/api/auth';

export default function LoginPage() {
   const onSubmit = (email: string, password: string) => {
      login(email, password);
   };
   return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4">
         <AuthForm 
            title="Вход в систему"
            description="Введите ваш email для доступа к Finance Tracker"
            buttonText="Войти"
            onSubmit={onSubmit}
         />
      </div>
   );
}
