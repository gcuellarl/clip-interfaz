import { inject, injectable } from "inversify";

import Section from "../domain/section/section";
import ISectionRepository from "../domain/section/section-irepository";
import { TYPES } from "../inversify.types";

@injectable()
export default class SectionService {
  constructor(
    @inject(TYPES.REPOSITORY.SECTION)
    private sectionRepository: ISectionRepository
  ) {}

  async getAll(): Promise<Section[]> {
    return await this.sectionRepository.getAll();
  }

  async syncSections() {
    const sections = await this.sectionRepository.getAllFolletos();

    const r = await this.sectionRepository.saveSections(sections);

    return r;
  }

  async getByMediumId(idMedium: number): Promise<Section[]> {
    return await this.sectionRepository.getByMediumId(idMedium);
  }
}
