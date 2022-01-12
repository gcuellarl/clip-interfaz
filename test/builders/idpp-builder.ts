import IDPP from "../../src/domain/idpp/idpp";

export default class IDPPBuilder {
  private id: number = 1;
  private section: string = "PP";
  private description: string = "Pagina P";
  private active: number = 1;

  static aIdpp() {
    return new IDPPBuilder();
  }

  withId(id: number): IDPPBuilder {
    this.id = id;
    return this;
  }

  withSection(section: string): IDPPBuilder {
    this.section = section;
    return this;
  }

  withDescription(description: string): IDPPBuilder {
    this.description = description;
    return this;
  }

  withActive(active: number): IDPPBuilder {
    this.active = active;
    return this;
  }

  build(): IDPP {
    return new IDPP({
      id: this.id,
      section: this.section,
      description: this.description,
      active: this.active,
    });
  }
}
