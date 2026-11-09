import CredentialsForm from '@/components/domain/credentials-form';
import { Modal } from './Modal';
import { useAuth } from '@/contexts/AuthContext';

function RegisterModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
   const { registration, openModal } = useAuth();

   const handleSubmit = async (email: string, password: string) => {
      try {
         await registration(email, password);
         onClose();
      } catch (e) {
         console.error('Ошибка регистрации', e);
      }
   };

   return (
      <Modal isOpen={isOpen} onClose={onClose}>
         <CredentialsForm
            title="Регистрация"
            description="Создайте аккаунт для доступа к Finance Tracker"
            buttonText="Зарегистрироваться"
            question="Уже есть аккаунта?"
            actionText="Войти"
            onSubmit={handleSubmit}
            onSwitch={() => {openModal('login')}}
         />
      </Modal>
   );
}
export default RegisterModal;
