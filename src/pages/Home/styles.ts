import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;

  .wrapper {
    width: 720px;
    height: 300px;
    display: flex;
    align-self: center;

    background: var(--white);
    box-shadow: 0 0 0.5rem var(--white-200);
    border-bottom: solid 3px var(--primary);
    border-radius: 0.5rem;

    main {
      flex: 2;
      padding: 1rem;

      img {
        width: 300px;
        margin-bottom: 1rem;
      }

      h1 {
        font-size: 2rem;

        span {
          color: var(--primary);
        }
      }
    }

    aside {
      flex: 1;
      padding: 2rem;

      border-left: 1px solid var(--white-100);

      h1 {
        margin-bottom: 2rem;

        span {
          margin-left: 0.5rem;
        }
      }
    }
  }
`;

export const Form = styled.form`
  width: 100%;

  input {
    width: 100%;
    height: 2rem;
    margin-bottom: 2rem;

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

  div {
    display: flex;
    justify-content: flex-end;

    button {
      padding: 0.2rem 0.5rem;

      font-size: 1.25rem;

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
