interface IDownload {
  href: string;
  fileName: string;
  extension: string;
}

export const useDownload = () => {
  function download({ href, fileName, extension }: IDownload): void {
    const a = document.createElement('a');

    a.href = href;
    a.download = `${fileName}.${extension}`;

    a.click();
    a.remove();
  }

  return { download };
};
