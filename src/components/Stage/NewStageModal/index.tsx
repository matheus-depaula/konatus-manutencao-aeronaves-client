import { FaFont, FaImage } from 'react-icons/fa';
import { AiOutlineFieldNumber } from 'react-icons/ai';
import { FormEvent, useEffect, useState } from 'react';

import { StageType } from '../../../entities/Stage';
import { createStageUseCase } from '../../../useCases/Stage/CreateStage';

import { useAuth } from '../../../hooks/useAuth';
import { useToastify } from '../../../hooks/useToastify';

import { Modal } from '../../Common/Modal';

import { Form } from './styles';

interface INewStageModal {
  isOpen: boolean;
  maintenanceId: string;
  closeModal: () => void;
  onNewStageModalCreated: () => void;
}

export function NewStageModal({
  isOpen,
  maintenanceId,
  closeModal,
  onNewStageModalCreated,
}: INewStageModal) {
  const { user } = useAuth();
  const { successToast, errorToast } = useToastify();

  const [type, setType] = useState<StageType>(1);
  const [description, setDescription] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      const res = await createStageUseCase.execute(
        { description, type, maintenanceId },
        user.token
      );

      successToast(res.message);
      onNewStageModalCreated();
      closeModal();
    } catch (err) {
      errorToast(err.response?.data?.message || err?.message || 'Erro inesperado.');
    }
  }

  useEffect(() => {
    if (isOpen) {
      setDescription('');
      setType(1);
    }
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={closeModal} header="Nova etapa">
      <Form onSubmit={handleSubmit}>
        <div className="type-group">
          <button type="button" className={type === 1 ? 'active' : ''} onClick={() => setType(1)}>
            <FaFont size={18} />
            Texto
          </button>
          <button type="button" className={type === 2 ? 'active' : ''} onClick={() => setType(2)}>
            <AiOutlineFieldNumber size={24} />
            Numérico
          </button>
          <button type="button" className={type === 3 ? 'active' : ''} onClick={() => setType(3)}>
            <FaImage size={18} />
            Imagem
          </button>
        </div>

        <div className="description-group">
          <input
            type="text"
            placeholder="Descrição"
            required
            autoFocus
            value={description}
            onChange={e => setDescription(e.target.value)}
          />

          <button type="submit">Confirmar</button>
        </div>
      </Form>
    </Modal>
  );
}
