import { useEffect, useState } from 'react';
import { FaCaretRight } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';

import { getMaintenanceUseCase } from '../../useCases/Maintenance/GetMaintenance';
import { IGetMaintenanceDTO } from '../../useCases/Maintenance/GetMaintenance/GetMaintenanceDTO';

import { useAuth } from '../../hooks/useAuth';
import { useModal } from '../../hooks/useModal';
import { useToastify } from '../../hooks/useToastify';
import { NoRecord } from '../../components/Common/NoRecord';

import { Container } from './styles';

interface IParams {
  id: string;
}

export function Maintenance() {
  const { user } = useAuth();
  const { id } = useParams<IParams>();
  const { errorToast } = useToastify();
  const { isModalOpen, openModal, closeModal } = useModal();

  const [maintenance, setMaintenance] = useState<IGetMaintenanceDTO>();

  async function getMaintenance() {
    try {
      const _maintenance = await getMaintenanceUseCase.execute(id, user.token);

      setMaintenance(_maintenance);
    } catch (err) {
      errorToast(err.response?.data?.message || err?.message || 'Erro inesperado.');
    }
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
              <h1>
                <Link to="/">Manutenções</Link>
                <FaCaretRight size={24} />
                {maintenance?.description}
              </h1>

              {maintenance?.user?.login === user.login && (
                <button onClick={openModal}>Nova etapa</button>
              )}
            </div>

            {!maintenance?.stages && <NoRecord record="stage" />}
          </main>
        </div>
      </Container>
    </>
  );
}
