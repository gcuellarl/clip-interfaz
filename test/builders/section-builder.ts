import Section from "../../src/domain/section/section";

export default class SectionBuilder {
  private id: number = 1;
  private idMedium: number = 1;
  private name: string = "name";
  private active: number = 0;

  static aSection() {
    return new SectionBuilder();
  }

  withId(id: number): SectionBuilder {
    this.id = id;
    return this;
  }

  withIdMedium(idMedium: number): SectionBuilder {
    this.idMedium = idMedium;
    return this;
  }

  withName(name: string): SectionBuilder {
    this.name = name;
    return this;
  }

  withActive(active: number): SectionBuilder {
    this.active = active;
    return this;
  }

  build(): Section {
    return new Section({
      id: this.id,
      idMedium: this.idMedium,
      name: this.name,
      active: this.active,
    });
  }
}
