import { api } from '../../../api/implementations/Axios';
import { FinishStageUseCase } from './FinishStageUseCase';

const finishStageUseCase = new FinishStageUseCase(api);

export { finishStageUseCase };
