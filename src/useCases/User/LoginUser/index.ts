import { LoginUserUseCase } from './LoginUserUseCase';
import { api } from '../../../api/implementations/Axios';

const loginUserUseCase = new LoginUserUseCase(api);

export { loginUserUseCase };
