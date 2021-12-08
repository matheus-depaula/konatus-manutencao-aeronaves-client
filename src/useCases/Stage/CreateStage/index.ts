import { api } from '../../../api/implementations/Axios';
import { CreateStageUseCase } from './CreateStageUseCase';

const createStageUseCase = new CreateStageUseCase(api);

export { createStageUseCase };
