enum StageStatus {
  'Etapa em execução',
  'Etapa finalizada',
}

export enum StageType {
  'Etapa de texto' = 1,
  'Etapa de número',
  'Etapa de foto',
}

export abstract class Stage {
  id: string;
  description: string;
  status: StageStatus;
  type: StageType;
  value?: string | number;
  createdAt: string;
}
