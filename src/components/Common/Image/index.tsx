import { Container } from './styles';

interface IImage {
  uri: string;
  alt?: string;
  style?: React.CSSProperties;
}

export function Image({ uri, alt, style }: IImage) {
  return (
    <Container>
      <img src={uri} alt={alt} style={style} />
    </Container>
  );
}
