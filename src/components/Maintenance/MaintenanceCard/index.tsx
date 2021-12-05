import { useHistory } from 'react-router-dom';

import { IListMaintenancesDTO } from '../../../useCases/Maintenance/ListMaintenances/ListMaintenancesDTO';

import { useModal } from '../../../hooks/useModal';

import { MaintenanceModal } from '../MaintenanceModal';

import { Container } from './styles';

interface IMaintenanceCard {
  maintenance: IListMaintenancesDTO;
}

export function MaintenanceCard({ maintenance }: IMaintenanceCard) {
  const { isModalOpen, openModal, closeModal } = useModal();

  const { push } = useHistory();

  function handleCardClick() {
    push(`/maintenance/${maintenance.id}`);
  }

  const status = ['Manutenção em execução', 'Manutenção finalizada'];

  return (
    <>
      <Container status={maintenance.status} onClick={handleCardClick}>
        <h3>{maintenance.description}</h3>
        <h3 className="status">{status[maintenance.status]}</h3>
      </Container>

      <MaintenanceModal
        description={maintenance.description}
        createdBy={maintenance.user.login}
        isOpen={isModalOpen}
        closeModal={closeModal}
      />
    </>
  );
}
