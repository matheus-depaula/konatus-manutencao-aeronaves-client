import styled from 'styled-components';

export const Form = styled.form`
  width: 576px;
  max-width: calc(100vw - 2rem);

  .type-group {
    width: 100%;
    margin-bottom: 1rem;
    gap: 0.5rem;
    display: flex;
    justify-content: center;

    button {
      padding: 0.5rem;
      display: flex;
      align-items: center;

      background: var(--white-100);
      border: 1px solid var(--white-300);
      border-radius: 0.2rem;

      transition: background 0.2s;

      svg {
        margin-right: 0.3rem;
      }

      &:hover {
        background: var(--white-200);
      }
    }

    .active {
      color: var(--white);
      background: var(--primary);
      border-color: transparent;

      &:hover {
        color: var(--white);
        background: var(--primary);
        border-color: transparent;
      }
    }
  }

  .description-group {
    display: flex;
    justify-content: space-between;

    input {
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
    }

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
  }
`;
