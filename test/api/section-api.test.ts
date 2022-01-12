import SectionAPI from "../../src/api/section-api";
import SectionService from "../../src/services/section-service";

import SectionBuilder from "../builders/section-builder";
import SectionMapper from "../../src/domain/section/section-mapper";

const MockedSectionService = SectionService as jest.Mock<SectionService>;

describe("Section API", () => {
  let api = new SectionAPI(new MockedSectionService());
  const EMPTY_REQUEST = { query: {}, body: null };

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

  describe("getAll", () => {
    beforeEach(() => {
      SectionService.prototype.getAll = jest
        .fn()
        .mockReturnValueOnce([SECTION_1, SECTION_2]);
    });

    it("should return a list of Sections", async () => {
      const { status, type, body } = await api.getAll(EMPTY_REQUEST);

      expect(status).toBe(200);
      expect(type).toBe("application/json");
      expect(body).toEqual(
        JSON.stringify({
          sections: [
            SectionMapper.toJson(SECTION_1),
            SectionMapper.toJson(SECTION_2),
          ],
        })
      );
    });

    it("should catch internal errors", async () => {
      SectionService.prototype.getAll = jest
        .fn()
        .mockRejectedValue(new Error("internal error."));

      const { status, type, body } = await api.getAll(EMPTY_REQUEST);

      expect(status).toBe(500);
      expect(type).toBe("application/json");
      expect(body).toEqual(JSON.stringify({ error: "internal error." }));
    });
  });

  describe("sectionSync", () => {
    it("should return a total number of section", async () => {
      const TOTAL_SECTIONS_SYNC = 20;
      SectionService.prototype.syncSections = jest
        .fn()
        .mockReturnValueOnce(TOTAL_SECTIONS_SYNC);

      const { status, type, body } = await api.sectionSync(EMPTY_REQUEST);

      expect(body).toBe(JSON.stringify({ totalSections: TOTAL_SECTIONS_SYNC }));
      expect(status).toBe(200);
      expect(type).toBe("application/json");
    });

    it("should catch internal errors", async () => {
      SectionService.prototype.syncSections = jest
        .fn()
        .mockRejectedValue(new Error("internal error."));

      const { status, type, body } = await api.sectionSync(EMPTY_REQUEST);

      expect(status).toBe(500);
      expect(type).toBe("application/json");
      expect(body).toEqual(JSON.stringify({ error: "internal error." }));
    });
  });

  describe("sectionsByMediumId", () => {
    const MEDIUM_ID = 1;
    const MEDIUM_ID_REQUEST = {
      query: { idMedium: `${MEDIUM_ID}` },
      body: null,
    };

    beforeEach(() => {
      SectionService.prototype.getByMediumId = jest
        .fn()
        .mockResolvedValue([SECTION_1, SECTION_2]);
    });

    it("should return section for medium id", async () => {
      const { status, type, body } = await api.getByMediumId(MEDIUM_ID_REQUEST);

      expect(SectionService.prototype.getByMediumId).toBeCalledWith(MEDIUM_ID);
      expect(body).toBe(JSON.stringify({ sections: [SECTION_1, SECTION_2] }));
      expect(status).toBe(200);
      expect(type).toBe("application/json");
    });

    it("should valid medium id is a number", async () => {
      const INVALID_MEDIUM_ID = "abc";
      const INVALID_MEDIUM_ID_REQUEST = {
        query: { idMedium: INVALID_MEDIUM_ID },
        body: null,
      };

      const { status, type, body } = await api.getByMediumId(
        INVALID_MEDIUM_ID_REQUEST
      );
      expect(status).toBe(400);
      expect(type).toBe("application/json");
      expect(body).toEqual(
        JSON.stringify({ error: "idMedium is not a number." })
      );
    });

    it("should valid medium id is not empty ", async () => {
      const EMPTY_MEDIUM_ID = "";
      const EMPTY_MEDIUM_ID_REQUEST = {
        query: { idMedium: EMPTY_MEDIUM_ID },
        body: null,
      };

      const { status, type, body } = await api.getByMediumId(
        EMPTY_MEDIUM_ID_REQUEST
      );

      expect(status).toBe(400);
      expect(type).toBe("application/json");
      expect(body).toEqual(
        JSON.stringify({ error: "idMedium is not a number." })
      );
    });

    it("should catch errors", async () => {
      SectionService.prototype.getByMediumId = jest
        .fn()
        .mockRejectedValue(new Error("internal error."));

      const { status, type, body } = await api.getByMediumId(MEDIUM_ID_REQUEST);

      expect(status).toBe(500);
      expect(type).toBe("application/json");
      expect(body).toEqual(JSON.stringify({ error: "internal error." }));
    });
  });
});
