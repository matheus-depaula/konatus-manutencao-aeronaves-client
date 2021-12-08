import { IApi, IApiRes } from '../../../api/IApi';
import { ICreateStageDTO } from './CreateStageDTO';

export class CreateStageUseCase {
  constructor(private api: IApi) {}

  public async execute(dto: ICreateStageDTO, token: string): Promise<IApiRes> {
    const description = dto.description.trim();
    const type = dto.type;
    const maintenanceId = dto.maintenanceId.trim();

    if (!description) throw new Error('Descrição inválida.');

    if (isNaN(type) || ![1, 2, 3].includes(type)) throw new Error('Tipo inválido');

    if (!maintenanceId) throw new Error('Manutenção inválida.');

    if (description.length < 4) throw new Error('Descrição deve ter pelo menos 4 caracteres.');

    const res = await this.api.post<IApiRes, ICreateStageDTO>('stage', dto, token);

    return res;
  }
}
