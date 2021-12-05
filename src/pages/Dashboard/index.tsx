import { useEffect, useState } from 'react';

import { listMaintenancesUseCase } from '../../useCases/Maintenance/ListMaintenances';
import { IListMaintenancesDTO } from '../../useCases/Maintenance/ListMaintenances/ListMaintenancesDTO';

import { useAuth } from '../../hooks/useAuth';
import { useModal } from '../../hooks/useModal';
import { useToastify } from '../../hooks/useToastify';

import { NoRecord } from '../../components/Common/NoRecord';
import { MaintenanceCard } from '../../components/Maintenance/MaintenanceCard';
import { NewMaintenanceModal } from '../../components/Maintenance/NewMaintenanceModal';

import { Container } from './styles';

export function Dashboard() {
  const { user } = useAuth();
  const { errorToast } = useToastify();
  const { isModalOpen, openModal, closeModal } = useModal();

  const [isLoading, setIsLoading] = useState(true);
  const [maintenances, setMaintenances] = useState<IListMaintenancesDTO[]>([]);

  async function getMaintenances() {
    try {
      setMaintenances([]);

      const _maintenances = await listMaintenancesUseCase.execute(user.token);

      setMaintenances(_maintenances);
    } catch (err) {
      errorToast(err.response?.data?.message || err?.message || 'Erro inesperado.');
    } finally {
      setTimeout(() => setIsLoading(false), 1000);
    }
  }

  useEffect(() => {
    getMaintenances();
  }, []);

  return (
    <>
      <Container>
        <div className="wrapper">
          <main>
            <div className="list-header">
              <h1>Manutenções</h1>
              <button onClick={openModal}>Nova manutenção</button>
            </div>

            {maintenances.map(e => (
              <MaintenanceCard key={e.id} maintenance={e} />
            ))}

            {maintenances.length === 0 && <NoRecord record="maintenance" isLoading={isLoading} />}
          </main>
        </div>
      </Container>

      <NewMaintenanceModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        onMaintenanceCreated={getMaintenances}
      />
    </>
  );
}
