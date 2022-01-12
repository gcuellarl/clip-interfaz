import IDPPBuilder from "../builders/idpp-builder";
import IDPPService from "../../src/services/idpp-service";
import IIDPPRepository from "../../src/domain/idpp/idpp-irepository";

const mockedIDPPRepository = IIDPPRepository as jest.Mock<IIDPPRepository>;

describe("Service idpp", () => {
  const idppService = new IDPPService(new mockedIDPPRepository());

  const IDPP_1 = IDPPBuilder.aIdpp()
    .withId(1)
    .withSection("PP")
    .withDescription("Primera Plana")
    .withActive(1)
    .build();
  const IDPP_2 = IDPPBuilder.aIdpp()
    .withId(2)
    .withSection("PC")
    .withDescription("Plana Color")
    .withActive(1)
    .build();

  describe("GetAll", () => {
    it("Should return get all idpp", async () => {
      IIDPPRepository.prototype.getAll = jest
        .fn()
        .mockResolvedValue([IDPP_1, IDPP_2]);

      const idpps = await idppService.getAll();
      expect(idpps).toEqual([IDPP_1, IDPP_2]);
    });
  });

  describe("SyncIdpp", () => {
    it("should return all idpp updated", async () => {
      const UPDATED_IDPP = 1;
      IIDPPRepository.prototype.getAllIdpp = jest
        .fn()
        .mockResolvedValue([IDPP_1, IDPP_2]);
      IIDPPRepository.prototype.saveIdpp = jest
        .fn()
        .mockResolvedValueOnce(UPDATED_IDPP);

      const totalSyncIdpp = await idppService.SyncIdpp();

      expect(IIDPPRepository.prototype.getAllIdpp).toBeCalled();
      expect(IIDPPRepository.prototype.saveIdpp).toBeCalledWith([
        IDPP_1,
        IDPP_2,
      ]);
      expect(totalSyncIdpp).toBe(UPDATED_IDPP);
    });
  });
});
