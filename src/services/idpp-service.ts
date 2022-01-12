import { inject, injectable } from "inversify";
import { TYPES } from "../inversify.types";

import IDPP from "../domain/idpp/idpp";
import IIDPPRepository from "../domain/idpp/idpp-irepository";

@injectable()
export default class IDPPService {
  constructor(
    @inject(TYPES.REPOSITORY.IDPP)
    private idppRepository: IIDPPRepository
  ) {}

  async getAll(): Promise<IDPP[]> {
    return await this.idppRepository.getAll();
  }

  async SyncIdpp() {
    const totalIdpp = await this.idppRepository.getAllIdpp();
    return await this.idppRepository.saveIdpp(totalIdpp);
  }
}
