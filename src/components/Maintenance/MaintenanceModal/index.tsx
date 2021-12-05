import { useAuth } from '../../../hooks/useAuth';
import { useToastify } from '../../../hooks/useToastify';

import { Modal } from '../../Common/Modal';

import { Container } from './styles';

interface IMaintenanceModal {
  description: string;
  createdBy: string;
  isOpen: boolean;
  closeModal: () => void;
}

export function MaintenanceModal({
  description,
  createdBy,
  isOpen,
  closeModal,
}: IMaintenanceModal) {
  const { user } = useAuth();
  const { successToast, errorToast } = useToastify();

  return (
    <Modal isOpen={isOpen} onClose={closeModal} header={description}>
      <Container>
        <div className="stages-header">
          <h1>Etapas</h1>
          {createdBy === user.login && <button>Nova etapa</button>}
        </div>
      </Container>
    </Modal>
  );
}
