import { inject, injectable } from "inversify";
import Image from "../domain/images/image";
import IImageRepository from "../domain/images/image-irepository";
import { TYPES } from "../inversify.types";

export default class ProcessImageService {
  constructor(
    @inject(TYPES.REPOSITORY.IMAGE) private imageRepository: IImageRepository
  ) {}

  async process(imagenes: Image[]): Promise<Image[]> {
    const imagenesInsert: Image[] = [];

    imagenes.forEach(async (image) => {
      const imagenEfinfo = await this.getImage(image);

      if (imagenEfinfo == null) {
        const insertEfinfo = await this.imageRepository.saveImagenesEfinfo(
          image
        );
        console.log({ image });
        imagenesInsert.push(image);
      }
    });

    return imagenesInsert;
  }

  async getImage(image: Image): Promise<any | null> {
    const { mediumId, sectionId, idppId, date } = image;
    const imageEfinfo = await this.imageRepository.getImage(
      mediumId,
      sectionId,
      idppId,
      date
    );
    return imageEfinfo;
  }
}
