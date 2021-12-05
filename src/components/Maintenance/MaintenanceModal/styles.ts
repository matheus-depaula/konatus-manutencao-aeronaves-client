import styled from 'styled-components';

export const Container = styled.div`
  width: 700px;
  max-width: calc(100vw - 2rem);
  /* height: calc(100vh - 5rem); */

  .stages-header {
    display: flex;
    justify-content: space-between;
  }

  /* input {
    width: calc(100% - 108px);
    height: 2.05rem;

    background: transparent;

    font-size: 1.25rem;

    border: none;
    border-bottom: 2px solid var(--black-500);

    transition: border-bottom-color 0.3s;

    &::placeholder {
      color: var(--black-500);
    }

    &:focus {
      border-bottom-color: var(--primary);
      outline: none;
    }
  } */

  button {
    height: 2.1rem;
    padding: 0 0.5rem;
    align-self: flex-end;

    color: var(--white);
    background: var(--primary);
    border-color: transparent;
    border-radius: 0.2rem;

    transition: filter 0.3s;

    &:hover {
      filter: brightness(1.1);
    }
  }
`;
