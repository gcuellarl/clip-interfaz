import Image from "../../domain/images/image";

export default abstract class IImageRepository {
  abstract getImage(
    mediumId: number,
    sectionId: number,
    idppId: number,
    date: string
  ): Promise<Image | null>;

  abstract saveImagenesEfinfo(imagen: Image): Promise<Image | null>;
}
