import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
// import { Link } from 'react-router-dom';

import InputField from '@/components/ui/input';
import Button from '@/components/ui/button';

const loginSchema = z.object({
   email: z.string().email('Введите корректный email адрес'),
   password: z.string().min(6, 'Пароль должен быть не менее 6 символов'),
});

type FormFieldProps = {
   title: string;
   description: string;
   buttonText: string;

   onSubmit: (email: string, password: string) => void;

   // footerText?: string;
   // footerLink?: string;
   // footerLabel?: string;
};
export default function FormField({
   title,
   description,
   buttonText,
   // footerText,
   // footerLink,
   // footerLabel,
   onSubmit,
}: FormFieldProps) {
   type LoginFormData = z.infer<typeof loginSchema>;

   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
   } = useForm<LoginFormData>({
      resolver: zodResolver(loginSchema),
      mode: 'onSubmit',
      // criteriaMode: 'all',
      delayError: 500, // задержка для вывода ошибок, при устранении убиается моментально, задержка только на показ
      defaultValues: {
         email: '',
         password: '',
      },
   });

   return (
      <>
         <div className="w-full max-w-md space-y-6 rounded-2xl bg-white p-8 shadow-sm border border-zinc-100">
            <div className="space-y-2 text-center">
               <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
               <p className="text-sm text-zinc-500">{description}</p>
            </div>

            <form
               onSubmit={handleSubmit(({ email, password }) => onSubmit(email, password))}
               className="space-y-4"
            >
               <div className="space-y-1">
                  <label className="text-sm font-medium text-zinc-700 block">Email</label>
                  <InputField placeholder="name@example.com" type="email" {...register('email')} />
                  {errors.email && (
                     <p className="text-xs text-red-500 font-medium mt-1">{errors.email.message}</p>
                  )}
               </div>

               <div className="space-y-1">
                  <label className="text-sm font-medium text-zinc-700 block">Пароль</label>
                  <InputField
                     type="password"
                     placeholder="Введите пароль"
                     {...register('password')}
                  />
                  {errors.password && (
                     <p className="text-xs text-red-500 font-medium mt-1">
                        {errors.password.message}
                     </p>
                  )}
               </div>

               <Button type="submit" disabled={isSubmitting}>
                  {/* заменить на что-то обобщенное */}
                  {/* {isSubmitting ? 'Вход...' : 'Войти'} */}
                  {buttonText}
               </Button>
               {/* {footerText && footerLink && (
                  <div className="mt-4 text-center text-sm text-zinc-600">
                     {footerText}{' '}
                     {footerLink && footerLabel ? (
                        <Link
                           to={footerLink}
                           className="font-medium text-blue-600 hover:text-blue-700 underline"
                        >
                           {footerLabel}
                        </Link>
                     ) : null}
                  </div>
               )} */}
            </form>
         </div>
      </>
   );
}
