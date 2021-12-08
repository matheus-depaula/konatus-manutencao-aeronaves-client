import styled from 'styled-components';

interface IContainer {
  isDragActive?: boolean;
}

export const Container = styled.div<IContainer>`
  max-width: 100%;
  display: grid;
  place-items: center;

  .preview {
    position: relative;
    width: fit-content;
    max-width: 12rem;
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
  }

  .dropzone {
    width: 100%;
    height: 10rem;
    padding: 1rem;
    display: grid;
    place-items: center;

    background: ${props => (props.isDragActive ? '#dadada' : '#f0f0f0')};
    border: 2px dashed ${props => (props.isDragActive ? '#ec6c04' : '#dadada')};
    border-radius: 0.3rem;

    cursor: pointer;
    transition: background border color 0.2s;

    svg {
      font-size: 3rem;
      color: ${props => (props.isDragActive ? '#acacac' : '#c4c4c4')};

      transition: 0.2s;
    }
  }
`;
