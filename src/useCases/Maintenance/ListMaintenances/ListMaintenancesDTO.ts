import { MaintenanceStatus } from '../../../entities/Maintenance';

export interface IListMaintenancesDTO {
  id: string;
  description: string;
  status: MaintenanceStatus;
  createdAt: string;
  user: {
    id: string;
    login: string;
  };
}
