import { createContext, useState } from 'react';

import { User } from '../entities/User';
import { loginUserUseCase } from '../useCases/User/LoginUser';
import { ILoginUserDTO } from '../useCases/User/LoginUser/LoginUserDTO';

import { useToastify } from '../hooks/useToastify';

interface IAuthContext {
  user: User;
  login: (dto: ILoginUserDTO) => void;
  logout: () => void;
}

interface IAuthContextProvider {
  children: React.ReactNode;
}

export const AuthContext = createContext({} as IAuthContext);

export function AuthContextProvider({ children }: IAuthContextProvider) {
  const { errorToast } = useToastify();

  const [user, setUser] = useState<User>();

  const login = async (dto: ILoginUserDTO): Promise<void> => {
    try {
      const token = await loginUserUseCase.execute(dto);

      const userInfo: User = { login: dto.login, token };

      localStorage.setItem('@App:user', JSON.stringify(userInfo));

      setUser(userInfo);
    } catch (err) {
      errorToast(err.response.data.message);
    }
  };

  const logout = () => {
    localStorage.removeItem('@App:user');

    setUser(null);
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}
