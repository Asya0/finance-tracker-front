import CredentialsForm from '@/components/domain/credentials-form';
import { Modal } from './Modal';
import { registration } from '@/api/auth';

function RegisterModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
   const handleSubmit = async (email: string, password: string) => {
      try {
         await registration(email, password);
         onClose();
      } catch (e) {
         console.error('Ошибка регистрации', e);
      }
   };

   return (
      <Modal isOpen={isOpen} onClose={onClose} title="Регистрация">
         <CredentialsForm
            title="Регистрация"
            description="Создайте аккаунт для доступа к Finance Tracker"
            buttonText="Зарегистрироваться"
            onSubmit={handleSubmit}
         />
      </Modal>
   );
}
export default RegisterModal;
