import { useEffect, useState } from 'react';

import { listMaintenancesUseCase } from '../../useCases/Maintenance/ListMaintenances';
import { IListMaintenancesDTO } from '../../useCases/Maintenance/ListMaintenances/ListMaintenancesDTO';

import { useAuth } from '../../hooks/useAuth';
import { useToastify } from '../../hooks/useToastify';

import { MaintenanceCard } from '../../components/Maintenance/MaintenanceCard';

import { Container } from './styles';

export function Dashboard() {
  const { user } = useAuth();
  const { errorToast } = useToastify();

  const [maintenances, setMaintenances] = useState<IListMaintenancesDTO[]>([]);

  async function getMaintenances() {
    try {
      const _maintenances = await listMaintenancesUseCase.execute(user.token);

      setMaintenances(_maintenances);
    } catch (err) {
      errorToast(err.response?.data?.message || err?.message || 'Erro inesperado.');
    }
  }

  useEffect(() => {
    getMaintenances();
  }, []);

  return (
    <Container>
      <div className="wrapper">
        <main>
          <div className="list-header">
            <h1>Manutenções</h1>
          </div>

          {maintenances.map(e => (
            <MaintenanceCard key={e.id} maintenance={e} />
          ))}
        </main>
      </div>
    </Container>
  );
}
