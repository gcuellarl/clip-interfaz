import IDPP from "./idpp";

export default class IDPPMapper {
  static toJson(idpp: IDPP) {
    return {
      id: idpp.id,
      section: idpp.section,
      description: idpp.description,
      active: idpp.active,
    };
  }
}
