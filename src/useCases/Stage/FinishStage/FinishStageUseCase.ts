import { IApi, IApiRes } from '../../../api/IApi';
import { IFinishStageDTO } from './FinishStageDTO';

export class FinishStageUseCase {
  constructor(private api: IApi) {}

  public async execute(dto: IFinishStageDTO, token: string): Promise<IApiRes> {
    const value = dto.value;
    const id = dto.id.trim();

    if (!id) throw new Error('Manutenção inválida.');

    if (![1, 2, 3].includes(dto.type)) throw new Error('Tipo inválido.');

    if (dto.type === 1) {
      const _value = (value as string).trim();

      if (!_value) throw new Error('Valor inválido.');

      if (_value.length < 4) throw new Error('Valor deve ter pelo menos 4 caracteres.');
    }

    if (dto.type === 2 && isNaN(Number(dto.value))) throw new Error('Valor inválido');

    const res = await this.api.put<IApiRes, IFinishStageDTO>('stage', dto, token);

    return res;
  }
}
