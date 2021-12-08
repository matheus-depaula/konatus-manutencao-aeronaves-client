import { api } from '../../../api/implementations/Axios';
import { FinishMaintenanceUseCase } from './FinishMaintenanceUseCase';

const finishMaintenanceUseCase = new FinishMaintenanceUseCase(api);

export { finishMaintenanceUseCase };
