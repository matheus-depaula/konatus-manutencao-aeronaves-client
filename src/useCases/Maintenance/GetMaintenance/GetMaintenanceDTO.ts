import { MaintenanceStatus } from '../../../entities/Maintenance';

export interface IGetMaintenanceDTO {
  id: string;
  description: string;
  status: MaintenanceStatus;
  createdAt: string;
  user: {
    id: string;
    login: string;
  };
  stages: any[];
}
