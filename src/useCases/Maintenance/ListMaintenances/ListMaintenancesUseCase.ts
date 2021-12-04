import { IApi } from '../../../api/IApi';
import { IListMaintenancesDTO } from './ListMaintenancesDTO';

export class ListMaintenancesUseCase {
  constructor(private api: IApi) {}

  public async execute(token: string): Promise<IListMaintenancesDTO[]> {
    const maintenances = await this.api.get<IListMaintenancesDTO[]>('maintenance', token);

    return maintenances;
  }
}
