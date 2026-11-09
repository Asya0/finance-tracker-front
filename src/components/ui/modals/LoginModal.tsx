import CredentialsForm from '@/components/domain/credentials-form';
import { Modal } from './Modal';
import { useAuth } from '@/contexts/AuthContext';

function LoginModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
   const { login, openModal } = useAuth();

   const handleSubmit = async (email: string, password: string) => {
      try {
         await login(email, password);
      } catch (e) {
         console.error('Ошибка входа', e);
      }
   };

   return (
      <Modal isOpen={isOpen} onClose={onClose}>
         <CredentialsForm
            title="Вход в систему"
            description="Введите ваш email для доступа к Finance Tracker"
            buttonText="Войти"
            question="Нет аккаунта?"
            actionText="Зарегистрироваться"
            onSubmit={handleSubmit}
            onSwitch={() => {openModal('register')}}
         />
      </Modal>
   );
}
export default LoginModal;
