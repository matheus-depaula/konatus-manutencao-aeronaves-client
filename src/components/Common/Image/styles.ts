import styled from 'styled-components';

interface IContainer {
  isDragActive?: boolean;
}

export const Container = styled.div<IContainer>`
  width: fit-content;
  max-width: 100%;
  padding: 0.2rem;
  display: grid;
  place-items: center;

  border: 1px solid var(--white-100);
  box-shadow: 0 0 0.5rem var(--white-100);

  img {
    width: 100%;
  }

  button {
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    width: 1.5rem;
    height: 1.5rem;
    padding: 0;
    display: grid;
    place-items: center;

    border-radius: 1.5em;
  }
`;
