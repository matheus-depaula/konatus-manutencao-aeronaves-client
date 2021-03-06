import styled from 'styled-components';

interface IContainer {
  status: number;
}

export const Container = styled.div<IContainer>`
  width: 100%;
  padding: 0.75rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 1rem 0;

  background: var(--white);
  box-shadow: 0 0 0.5rem var(--white-200);
  border-radius: 0.3rem;

  cursor: pointer;

  div {
    display: flex;
    align-items: baseline;

    .status {
      margin-left: 0.5rem;

      color: ${props => (props.status === 0 ? '#ec6c04' : '#42c242')};
    }
  }
`;
