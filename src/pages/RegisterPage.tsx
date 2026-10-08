import FormField from '@/components/forms/form-field';
import { registration } from '@/api/auth';

export default function RegisterPage() {
   const onSubmit = (email: string, password: string) => {
      registration(email, password);
   };
   return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4">
         {/* <FormField title="Вход в систему" description="Введите ваш email для доступа к Finance Tracker" buttonText="Войти"/> */}
         <FormField
            title="Регистрация"
            description="Введите ваш email для доступа к Finance Tracker"
            buttonText="Зарегистрироваться"
            // footerText="Уже есть аккаунт?"
            // footerLink="/login"
            // footerLabel="Войти"
            onSubmit={onSubmit}
         />
      </div>
   );
}
