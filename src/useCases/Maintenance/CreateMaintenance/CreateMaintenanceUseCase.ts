import { IApi, IApiRes } from '../../../api/IApi';
import { ICreateMaintenanceDTO } from './CreateMaintenanceDTO';

export class CreateMaintenanceUseCase {
  constructor(private api: IApi) {}

  public async execute(dto: ICreateMaintenanceDTO, token: string): Promise<IApiRes> {
    const description = dto.description.trim();

    if (!description) throw new Error('Descrição inválida.');

    if (description.length < 4) throw new Error('Descrição deve ter pelo menos 4 caracteres.');

    const res = await this.api.post<IApiRes, ICreateMaintenanceDTO>('maintenance', dto, token);

    return res;
  }
}
