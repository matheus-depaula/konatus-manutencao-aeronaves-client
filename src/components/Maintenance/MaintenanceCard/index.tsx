import moment from 'moment';
import { useHistory } from 'react-router-dom';

import { IListMaintenancesDTO } from '../../../useCases/Maintenance/ListMaintenances/ListMaintenancesDTO';

import { Container } from './styles';

interface IMaintenanceCard {
  maintenance: IListMaintenancesDTO;
}

export function MaintenanceCard({ maintenance }: IMaintenanceCard) {
  const { push } = useHistory();

  function handleCardClick() {
    push(`/maintenance/${maintenance.id}`);
  }

  const status = ['Em execução', 'Finalizada'];

  return (
    <Container status={maintenance.status} onClick={handleCardClick}>
      <h3>{maintenance.description}</h3>
      <div>
        <span>
          <strong>Cadastrada em:</strong> {moment(maintenance.createdAt).format('L')}
        </span>

        <h3 className="status">{status[maintenance.status]}</h3>
      </div>
    </Container>
  );
}
