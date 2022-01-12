import Medium from "../../src/domain/medium/medium";

export default class MediumBuilder {
  private id: number = 1;
  private name: string = "name";

  static aMedium() {
    return new MediumBuilder();
  }

  withId(id: number): MediumBuilder {
    this.id = id;
    return this;
  }

  withName(name: string): MediumBuilder {
    this.name = name;
    return this;
  }

  build(): Medium {
    return new Medium({ id: this.id, name: this.name });
  }
}
