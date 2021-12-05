import { FormEvent, useEffect, useState } from 'react';

import { createMaintenanceUseCas } from '../../../useCases/Maintenance/CreateMaintenance';

import { useAuth } from '../../../hooks/useAuth';
import { useToastify } from '../../../hooks/useToastify';

import { Modal } from '../../Common/Modal';

import { Form } from './styles';

interface INewMaintenanceModal {
  isOpen: boolean;
  closeModal: () => void;
  onMaintenanceCreated: () => void;
}

export function NewMaintenanceModal({
  isOpen,
  closeModal,
  onMaintenanceCreated,
}: INewMaintenanceModal) {
  const { user } = useAuth();
  const { successToast, errorToast } = useToastify();

  const [description, setDescription] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      const res = await createMaintenanceUseCas.execute({ description }, user.token);

      successToast(res.message);
      onMaintenanceCreated();
      closeModal();
    } catch (err) {
      errorToast(err.response?.data?.message || err?.message || 'Erro inesperado.');
    }
  }

  useEffect(() => isOpen && setDescription(''), [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={closeModal} header="Nova manutenção">
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Descrição"
          required
          autoFocus
          value={description}
          onChange={e => setDescription(e.target.value)}
        />

        <button type="submit">Confirmar</button>
      </Form>
    </Modal>
  );
}
