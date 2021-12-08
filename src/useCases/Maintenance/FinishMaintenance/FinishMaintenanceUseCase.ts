import { IApi, IApiRes } from '../../../api/IApi';

import { IFinishMaintenanceDTO } from './FinishMaintenanceDTO';

export class FinishMaintenanceUseCase {
  constructor(private api: IApi) {}

  public async execute(dto: IFinishMaintenanceDTO, token: string): Promise<IApiRes> {
    const res = await this.api.put<IApiRes, IFinishMaintenanceDTO>('maintenance', dto, token);

    return res;
  }
}
