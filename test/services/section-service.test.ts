import SectionService from "../../src/services/section-service";
import ISectionRepository from "../../src/domain/section/section-irepository";
import SectionBuilder from "../builders/section-builder";

const mockedSectionRepository =
  ISectionRepository as jest.Mock<ISectionRepository>;

describe("Service section", () => {
  const sectionService = new SectionService(new mockedSectionRepository());
  const SECTION_1 = SectionBuilder.aSection()
    .withId(1)
    .withIdMedium(1)
    .withName("section 1")
    .withActive(1)
    .build();
  const SECTION_2 = SectionBuilder.aSection()
    .withId(2)
    .withIdMedium(2)
    .withName("section 2")
    .withActive(1)
    .build();

  describe("GetAll", () => {
    it("Should return get all sections", async () => {
      ISectionRepository.prototype.getAll = jest
        .fn()
        .mockResolvedValue([SECTION_1, SECTION_2]);

      const sections = await sectionService.getAll();

      expect(sections).toEqual([SECTION_1, SECTION_2]);
    });
  });

  describe("Sync sections", () => {
    it("should return a total sections", async () => {
      const UPDATED_SECTIONS = 1;
      ISectionRepository.prototype.getAllFolletos = jest
        .fn()
        .mockResolvedValue([SECTION_1, SECTION_2]);
      ISectionRepository.prototype.saveSections = jest
        .fn()
        .mockResolvedValueOnce(UPDATED_SECTIONS);

      const resultTotalSECTIONs = await sectionService.syncSections();

      expect(ISectionRepository.prototype.getAllFolletos).toBeCalled();
      expect(ISectionRepository.prototype.saveSections).toBeCalledWith([
        SECTION_1,
        SECTION_2,
      ]);
      expect(resultTotalSECTIONs).toBe(UPDATED_SECTIONS);
    });
  });
});
