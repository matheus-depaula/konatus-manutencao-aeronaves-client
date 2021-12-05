import { IApi } from '../../../api/IApi';
import { ICreateMaintenanceDTO } from './CreateMaintenanceDTO';

interface IRes {
  message: string;
}

export class CreateMaintenanceUseCase {
  constructor(private api: IApi) {}

  public async execute(dto: ICreateMaintenanceDTO, token: string): Promise<IRes> {
    const description = dto.description.trim();

    if (!description) throw new Error('Descrição inválida.');

    if (description.length < 4) throw new Error('Descrição deve ter pelo menos 4 caracteres.');

    const res = await this.api.post<IRes, ICreateMaintenanceDTO>('maintenance', dto, token);

    return res;
  }
}
