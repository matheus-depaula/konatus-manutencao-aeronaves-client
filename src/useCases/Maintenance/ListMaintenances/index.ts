import { api } from '../../../api/implementations/Axios';
import { ListMaintenancesUseCase } from './ListMaintenancesUseCase';

const listMaintenancesUseCase = new ListMaintenancesUseCase(api);

export { listMaintenancesUseCase };
