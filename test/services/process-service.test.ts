import ProcessService from "../../src/services/process-service";
import IImageRepository from "../../src/domain/images/image-irepository";

import ImageBuilder from "../builders/image-builder";

const mockedImagenRepository = IImageRepository as jest.Mock<IImageRepository>;
describe("Service process", () => {
  const processService = new ProcessService(new mockedImagenRepository());

  describe("saveImagenesEfinfo", () => {
    const IMAGE_1 = ImageBuilder.aImage()
      .withId(1)
      .withDate("2022-01-11 00:00:00")
      .withMediumID(4)
      .withSectionID(4)
      .withSection("-")
      .withPage(1)
      .withMetadata("")
      .withText("")
      .withIdppId(2)
      .withActive(1)
      .withPath("/src/temp")
      .build();

    const IMAGE_2 = ImageBuilder.aImage()
      .withId(2)
      .withDate("2022-01-11 00:00:00")
      .withMediumID(4)
      .withSectionID(4)
      .withSection("-")
      .withPage(1)
      .withMetadata("")
      .withText("")
      .withIdppId(2)
      .withActive(1)
      .withPath("/src/temp")
      .build();

    it("should return image if exist in to efinfo", async () => {
      IImageRepository.prototype.getImage = jest
        .fn()
        .mockResolvedValueOnce(IMAGE_1);

      const resultGetImage = await processService.getImage(IMAGE_1);

      expect(resultGetImage).toEqual(IMAGE_1);
    });

    it("should return null if not exist in to efinfo", async () => {
      IImageRepository.prototype.getImage = jest
        .fn()
        .mockResolvedValueOnce(null);

      const resultGetImage = await processService.getImage(IMAGE_1);

      expect(resultGetImage).toEqual(null);
    });

    it.only("should return imagenes insert in to efinfo if not exist imagen", async () => {
      const TOTAL_IMAGENES_PROCESS = 2;

      IImageRepository.prototype.saveImagenesEfinfo = jest
        .fn()
        .mockResolvedValueOnce(IMAGE_1);

      ProcessService.prototype.getImage = jest
        .fn()
        .mockReturnValueOnce(null)
        .mockReturnValueOnce(IMAGE_2);

      const resultProcess = await processService.process([IMAGE_1, IMAGE_2]);

      expect(resultProcess).toEqual([IMAGE_1]);
    });
  });
});
