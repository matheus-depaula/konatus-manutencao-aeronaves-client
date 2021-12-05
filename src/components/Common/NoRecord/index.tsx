import { FaTools } from 'react-icons/fa';
import Loader from 'react-loader-spinner';

import { Container } from './styles';

interface INoRecord {
  record: 'maintenance' | 'stage';
  isLoading: boolean;
}

export function NoRecord({ record, isLoading }: INoRecord) {
  const label = {
    maintenance: 'manutenções',
    stage: 'etapas',
  };

  return (
    <Container>
      {isLoading ? (
        <Loader type="Grid" color="#ec6c04" height={56} width={56} />
      ) : (
        <>
          <FaTools size={56} />
          <h2>Sem {label[record]} cadastradas</h2>
        </>
      )}
    </Container>
  );
}
