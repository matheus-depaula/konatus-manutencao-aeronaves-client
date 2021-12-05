import { api } from '../../../api/implementations/Axios';
import { CreateMaintenanceUseCase } from './CreateMaintenanceUseCase';

const createMaintenanceUseCas = new CreateMaintenanceUseCase(api);

export { createMaintenanceUseCas };
