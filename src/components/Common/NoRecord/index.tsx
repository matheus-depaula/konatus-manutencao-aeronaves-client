import { FaTools } from 'react-icons/fa';

import { Container } from './styles';

interface INoRecord {
  record: 'maintenance' | 'stage';
}

export function NoRecord({ record }: INoRecord) {
  const label = {
    maintenance: 'manutenções',
    stage: 'etapas',
  };

  return (
    <Container>
      <FaTools size={56} />
      <h2>Sem {label[record]} cadastradas</h2>
    </Container>
  );
}
