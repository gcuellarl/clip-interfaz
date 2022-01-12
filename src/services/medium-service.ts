import { inject, injectable } from "inversify";

import Medium from "../domain/medium/medium";
import IMediumRepository from "../domain/medium/medium-irepository";
import { TYPES } from "../inversify.types";

@injectable()
export default class MediumService {
  constructor(
    @inject(TYPES.REPOSITORY.MEDIUM) private mediumRepository: IMediumRepository
  ) {}

  async getAll(): Promise<Medium[]> {
    return await this.mediumRepository.getAll();
  }

  async syncMediums() {
    const mediums = await this.mediumRepository.getAllPrensa();
    return await this.mediumRepository.saveMedios(mediums);
  }
}
