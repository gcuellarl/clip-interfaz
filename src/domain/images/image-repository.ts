import { injectable } from "inversify";
import Image from "../../domain/images/image";
import IImageRepository from "./image-irepository";

@injectable()
export default class ImageRepository extends IImageRepository {
  getImage(
    mediumId: number,
    sectionId: number,
    idppId: number,
    date: string
  ): Promise<Image | null> {
    throw new Error("Method not implemented.");
  }
  saveImagenesEfinfo(imagen: Image): Promise<Image | null> {
    throw new Error("Method not implemented.");
  }
}
