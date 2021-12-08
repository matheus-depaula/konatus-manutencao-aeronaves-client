import { FormEvent, useEffect, useState } from 'react';

import { Stage } from '../../../entities/Stage';
import { finishStageUseCase } from '../../../useCases/Stage/FinishStage';

import { useAuth } from '../../../hooks/useAuth';
import { useToastify } from '../../../hooks/useToastify';

import { Modal } from '../../Common/Modal';
import { Dropzone } from '../../Common/Dropzone';

import { Form } from './styles';

interface IFinishStageModal {
  isOpen: boolean;
  stage: Stage;
  closeModal: () => void;
  onStageFinished: () => void;
}

export function FinishStageModal({
  isOpen,
  stage,
  closeModal,
  onStageFinished,
}: IFinishStageModal) {
  const { user } = useAuth();
  const { successToast, errorToast } = useToastify();

  const [value, setValue] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      const { id, type } = stage;

      const res = await finishStageUseCase.execute({ id, type, value }, user.token);

      successToast(res.message);
      onStageFinished();
      closeModal();
    } catch (err) {
      errorToast(err.response?.data?.message || err?.message || 'Erro inesperado.');
    }
  }

  function onImageUploaded(base64: string) {
    setValue(base64);
  }

  useEffect(() => isOpen && setValue(''), [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={closeModal} header="Finalizar etapa">
      <Form onSubmit={handleSubmit}>
        {stage.type === 1 && (
          <div className="text-input-value-group">
            <input
              type="text"
              placeholder="Conclusão"
              required
              autoFocus
              value={value}
              onChange={e => setValue(e.target.value)}
            />

            <button type="submit">Confirmar</button>
          </div>
        )}

        {stage.type === 2 && (
          <div className="text-input-value-group">
            <input
              type="number"
              placeholder="Valor"
              required
              autoFocus
              value={value}
              onChange={e => setValue(e.target.value)}
            />

            <button type="submit">Confirmar</button>
          </div>
        )}

        {stage.type === 3 && (
          <div>
            <Dropzone onImageUploaded={onImageUploaded} />

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 16 }}>
              <button type="submit">Confirmar</button>
            </div>
          </div>
        )}
      </Form>
    </Modal>
  );
}
