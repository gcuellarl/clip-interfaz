import Section from "./section";

export default class SectionMapper {
  static toJson(section: Section) {
    return {
      id: section.id,
      idMedium: section.idMedium,
      name: section.name,
      active: section.active,
      type: section.type,
    };
  }
}
