import FormField from '../components/forms/form-field';
import { auth } from '@/api/auth';

export default function LoginPage() {
   const onSubmit = (email: string, password: string) => {
      auth(email, password);
   };
   return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4">
         <FormField
            title="Вход в систему"
            description="Введите ваш email для доступа к Finance Tracker"
            buttonText="Войти"
            // footerText="Нет аккаунта?"
            // footerLink="/register"
            // footerLabel="Создать аккаунт"
            onSubmit={onSubmit}
         />
         {/* <FormField title="Регистрация" description="Введите ваш email для доступа к Finance Tracker" buttonText="Зарегистрироваться"/> */}
      </div>
   );
}
