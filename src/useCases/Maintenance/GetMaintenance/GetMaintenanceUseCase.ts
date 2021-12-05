import { IApi } from '../../../api/IApi';
import { IGetMaintenanceDTO } from './GetMaintenanceDTO';

export class GetMaintenanceUseCase {
  constructor(private api: IApi) {}

  public async execute(id: string, token: string): Promise<IGetMaintenanceDTO> {
    const maintenances = await this.api.get<IGetMaintenanceDTO>(`maintenance/${id}`, token);

    return maintenances;
  }
}
