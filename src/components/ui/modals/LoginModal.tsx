import CredentialsForm from '@/components/domain/credentials-form';
import { Modal } from './Modal';
import { login } from '@/api/auth';

function LoginModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
   const handleSubmit = async (email: string, password: string) => {
      try {
         await login(email, password);
         onClose();
      } catch (e) {
         console.error('Ошибка входа', e);
      }
   };

   return (
      <Modal isOpen={isOpen} onClose={onClose} title="Вход">
         <CredentialsForm
            title="Вход в систему"
            description="Введите ваш email для доступа к Finance Tracker"
            buttonText="Войти"
            onSubmit={handleSubmit}
         />
      </Modal>
   );
}
export default LoginModal;
