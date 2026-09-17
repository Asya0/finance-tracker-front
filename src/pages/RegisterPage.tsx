import FormField from "@/components/forms/form-field";

export default function RegisterPage() {
   return (
         <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4">
            {/* <FormField title="Вход в систему" description="Введите ваш email для доступа к Finance Tracker" buttonText="Войти"/> */}
            <FormField title="Регистрация" description="Введите ваш email для доступа к Finance Tracker" buttonText="Зарегистрироваться"/>
         </div>
      );
}
