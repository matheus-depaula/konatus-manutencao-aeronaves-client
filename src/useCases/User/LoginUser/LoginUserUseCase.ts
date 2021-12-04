import { IApi } from '../../../api/IApi';
import { ILoginUserDTO } from './LoginUserDTO';

interface IRes {
  token: string;
}

export class LoginUserUseCase {
  constructor(private api: IApi) {}

  public async execute(dto: ILoginUserDTO): Promise<string> {
    const { token } = await this.api.post<IRes, ILoginUserDTO>('auth', dto);

    return token;
  }
}
