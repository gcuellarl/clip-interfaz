import Medium from "./medium";

export default class MediumMapper {
  static toJson(medium: Medium) {
    return {
      id: medium.id,
      name: medium.name,
      active: medium.active,
    };
  }
}
