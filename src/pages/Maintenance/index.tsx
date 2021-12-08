import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMaintenanceUseCase } from '../../useCases/Maintenance/GetMaintenance';
import { finishMaintenanceUseCase } from '../../useCases/Maintenance/FinishMaintenance';
import { IGetMaintenanceDTO } from '../../useCases/Maintenance/GetMaintenance/GetMaintenanceDTO';

import { useAuth } from '../../hooks/useAuth';
import { useModal } from '../../hooks/useModal';
import { useToastify } from '../../hooks/useToastify';

import { NoRecord } from '../../components/Common/NoRecord';
import { StageCard } from '../../components/Stage/StageCard';
import { NewStageModal } from '../../components/Stage/NewStageModal';

import { Container } from './styles';

interface IParams {
  id: string;
}

export function Maintenance() {
  const { user } = useAuth();
  const { id } = useParams<IParams>();
  const { errorToast, successToast } = useToastify();
  const { isModalOpen, openModal, closeModal } = useModal();

  const [isLoading, setIsLoading] = useState(true);
  const [maintenance, setMaintenance] = useState<IGetMaintenanceDTO>();
  const [isMaintenanceFinished, setIsMaintenanceFinished] = useState(false);

  async function getMaintenance() {
    try {
      const _maintenance = await getMaintenanceUseCase.execute(id, user.token);

      setMaintenance(_maintenance);

      const isFinished = !!_maintenance.stages.filter(stage => stage.status === 0).length;

      setIsMaintenanceFinished(!isFinished);
    } catch (err) {
      errorToast(err.response?.data?.message || err?.message || 'Erro inesperado.');
    } finally {
      setTimeout(() => setIsLoading(false), 1000);
    }
  }

  async function handleFinishMaintenance() {
    try {
      const res = await finishMaintenanceUseCase.execute({ id: maintenance.id }, user.token);

      successToast(res.message);
      getMaintenance();
    } catch (err) {
      errorToast(err.response?.data?.message || err?.message || 'Erro inesperado.');
    }
  }

  function canUpdate(index: number): boolean {
    const prevStage = maintenance.stages[index - 1];

    if (!prevStage) return true;

    if (prevStage?.status === 0) return false;

    return true;
  }

  useEffect(() => {
    getMaintenance();
  }, []);

  return (
    <>
      <Container>
        <div className="wrapper">
          <main>
            <div className="list-header">
              <h1>{maintenance?.description}</h1>

              {maintenance?.status === 0 && maintenance?.user?.login === user.login && (
                <div>
                  <button onClick={openModal}>Nova etapa</button>

                  {isMaintenanceFinished && (
                    <button onClick={handleFinishMaintenance}>Finalizar manutenção</button>
                  )}
                </div>
              )}
            </div>

            {maintenance?.status === 0 && maintenance?.stages.length === 0 ? (
              <NoRecord record="stage" isLoading={isLoading} />
            ) : (
              maintenance?.stages.map((stage, i) => (
                <StageCard
                  key={stage.id}
                  stage={stage}
                  isMaintenanceFinished={maintenance.status === 1}
                  canUpdate={canUpdate(i)}
                  onStageFinished={getMaintenance}
                />
              ))
            )}
          </main>
        </div>
      </Container>

      <NewStageModal
        isOpen={isModalOpen}
        maintenanceId={maintenance?.id}
        closeModal={closeModal}
        onNewStageModalCreated={getMaintenance}
      />
    </>
  );
}
