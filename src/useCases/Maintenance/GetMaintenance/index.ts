import { api } from '../../../api/implementations/Axios';
import { GetMaintenanceUseCase } from './GetMaintenanceUseCase';

const getMaintenanceUseCase = new GetMaintenanceUseCase(api);

export { getMaintenanceUseCase };
