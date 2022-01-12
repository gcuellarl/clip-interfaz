import MediumService from "../../src/services/medium-service";
import IMediumRepository from "../../src/domain/medium/medium-irepository";
import MediumBuilder from "../builders/medium-builder";

const mockedMediumRepository =
  IMediumRepository as jest.Mock<IMediumRepository>;

describe("Service medium", () => {
  const mediumService = new MediumService(new mockedMediumRepository());
  const MEDIUM_1 = MediumBuilder.aMedium()
    .withId(1)
    .withName("medium 1")
    .build();
  const MEDIUM_2 = MediumBuilder.aMedium()
    .withId(2)
    .withName("medium 2")
    .build();

  describe("GetAll", () => {
    it("Should return get all mediums", async () => {
      IMediumRepository.prototype.getAll = jest
        .fn()
        .mockResolvedValue([MEDIUM_1, MEDIUM_2]);

      const mediums = await mediumService.getAll();

      expect(mediums).toEqual([MEDIUM_1, MEDIUM_2]);
    });
  });

  describe("SyncMediums", () => {
    it("should return a total mediums updated", async () => {
      const UPDATED_MEDIUMS = 1;
      IMediumRepository.prototype.getAllPrensa = jest
        .fn()
        .mockResolvedValue([MEDIUM_1, MEDIUM_2]);
      IMediumRepository.prototype.saveMedios = jest
        .fn()
        .mockResolvedValueOnce(UPDATED_MEDIUMS);

      const resultTotalMediums = await mediumService.syncMediums();

      expect(IMediumRepository.prototype.getAllPrensa).toBeCalled();
      expect(IMediumRepository.prototype.saveMedios).toBeCalledWith([
        MEDIUM_1,
        MEDIUM_2,
      ]);
      expect(resultTotalMediums).toBe(UPDATED_MEDIUMS);
    });
  });
});
