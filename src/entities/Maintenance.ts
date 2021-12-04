export enum MaintenanceStatus {
  'Manutenção em execução',
  'Manutenção finalizada',
}

export abstract class Maintenance {
  id: string;
  description: string;
  status: MaintenanceStatus;
  createdAt: string;
}
