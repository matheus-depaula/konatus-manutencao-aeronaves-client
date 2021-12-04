import { IListMaintenancesDTO } from '../../../useCases/Maintenance/ListMaintenances/ListMaintenancesDTO';

import { Container } from './styles';

interface IMaintenanceCard {
  maintenance: IListMaintenancesDTO;
}

export function MaintenanceCard({ maintenance }: IMaintenanceCard) {
  const status = ['Manutenção em execução', 'Manutenção finalizada'];

  return (
    <Container status={maintenance.status}>
      <h3>{maintenance.description}</h3>
      <h3 className="status">{status[maintenance.status]}</h3>
    </Container>
  );
}
