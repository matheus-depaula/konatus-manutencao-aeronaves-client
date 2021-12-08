import { useDropzone } from 'react-dropzone';
import { useCallback, useEffect, useState } from 'react';
import { FaFileUpload, FaTimes } from 'react-icons/fa';

import { Container } from './styles';

interface IDropzone {
  onImageUploaded: (base64: string) => void;
}

interface IImage {
  blob: string;
  base64: string;
}

export function Dropzone({ onImageUploaded }: IDropzone) {
  const [image, setImage] = useState<IImage>(null);

  const onDrop = useCallback((file: any[]) => {
    if (file.length === 0) return;

    const img = file[0];

    const blob = URL.createObjectURL(img);

    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = () => setImage({ blob, base64: reader.result as string });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ accept: 'image/*', onDrop });

  useEffect(() => {
    if (image?.base64) onImageUploaded(image.base64);
  }, [image]);

  return image ? (
    <Container isDragActive={isDragActive}>
      <div className="preview">
        <button onClick={() => setImage(null)}>
          <FaTimes />
        </button>

        <img src={image.blob} alt="Imagem enviada." />
      </div>
    </Container>
  ) : (
    <Container isDragActive={isDragActive}>
      <div className="dropzone" {...getRootProps()}>
        <input {...getInputProps()} />
        <FaFileUpload />
      </div>
    </Container>
  );
}
