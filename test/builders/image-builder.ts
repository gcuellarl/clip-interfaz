import Image from "../../src/domain/images/image";

export default class ImageBuilder {
  private id: number = 1;
  private date: string = "2000-01-02";
  private mediumId: number = 4;
  private sectionId: number = 1;
  private section: string = "section";
  private page: number = 10;
  private metadata: string = "metadata";
  private text: string = "text";
  private idppId: number = 1;
  private active: number = 1;
  private path: string = "path";

  static aImage() {
    return new ImageBuilder();
  }

  withId(id: number): ImageBuilder {
    this.id = id;
    return this;
  }

  withDate(date: string): ImageBuilder {
    this.date = date;
    return this;
  }

  withMediumID(mediumId: number): ImageBuilder {
    this.mediumId = mediumId;
    return this;
  }

  withSectionID(sectionId: number): ImageBuilder {
    this.sectionId = sectionId;
    return this;
  }

  withSection(section: string): ImageBuilder {
    this.section = section;
    return this;
  }

  withPage(page: number): ImageBuilder {
    this.page = page;
    return this;
  }

  withMetadata(metadata: string): ImageBuilder {
    this.metadata = metadata;
    return this;
  }

  withText(text: string): ImageBuilder {
    this.text = text;
    return this;
  }

  withIdppId(idppId: number): ImageBuilder {
    this.idppId = idppId;
    return this;
  }

  withActive(active: number): ImageBuilder {
    this.active = active;
    return this;
  }

  withPath(path: string): ImageBuilder {
    this.path = path;
    return this;
  }

  build(): Image {
    return new Image({
      id: this.id,
      date: this.date,
      mediumId: this.mediumId,
      sectionId: this.sectionId,
      section: this.section,
      page: this.page,
      metadata: this.metadata,
      text: this.text,
      idppId: this.idppId,
      active: this.active,
      path: this.path,
    });
  }
}
