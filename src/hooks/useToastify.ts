import { toast } from 'react-toastify';

export const useToastify = () => {
  const defaultToast = (message: string) => toast(message);

  const infoToast = (message: string) => toast.info(message);

  const successToast = (message: string) => toast.success(message);

  const errorToast = (message: string) => toast.error(message);

  return { defaultToast, infoToast, successToast, errorToast };
};
