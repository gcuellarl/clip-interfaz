import MediumApi from "../../src/api/medium-api";
import MediumService from "../../src/services/medium-service";

import MediumBuilder from "../builders/medium-builder";
import MediumMapper from "../../src/domain/medium/medium-mapper";

const MockedMediumService = MediumService as jest.Mock<MediumService>;

describe("Medium API", () => {
  let api = new MediumApi(new MockedMediumService());
  const EMPTY_REQUEST = { query: {}, body: null };

  describe("getAll", () => {
    const MEDIUM_1 = MediumBuilder.aMedium()
      .withId(1)
      .withName("medium 1")
      .build();
    const MEDIUM_2 = MediumBuilder.aMedium()
      .withId(2)
      .withName("medium 2")
      .build();

    beforeEach(() => {
      MediumService.prototype.getAll = jest
        .fn()
        .mockReturnValueOnce([MEDIUM_1, MEDIUM_2]);
    });

    it("should return a list of mediums", async () => {
      const { status, type, body } = await api.getAll(EMPTY_REQUEST);

      expect(status).toBe(200);
      expect(type).toBe("application/json");
      expect(body).toEqual(
        JSON.stringify({
          mediums: [
            MediumMapper.toJson(MEDIUM_1),
            MediumMapper.toJson(MEDIUM_2),
          ],
        })
      );
    });

    it("should catch internal errors", async () => {
      MediumService.prototype.getAll = jest
        .fn()
        .mockRejectedValue(new Error("internal error."));

      const { status, type, body } = await api.getAll(EMPTY_REQUEST);

      expect(status).toBe(500);
      expect(type).toBe("application/json");
      expect(body).toEqual(JSON.stringify({ error: "internal error." }));
    });
  });

  describe("mediumsSync", () => {
    it("should return a total number of mediums", async () => {
      const TOTAL_MEDIUMS_SYNC = 20;
      MediumService.prototype.syncMediums = jest
        .fn()
        .mockReturnValueOnce(TOTAL_MEDIUMS_SYNC);

      const { status, type, body } = await api.mediumsSync(EMPTY_REQUEST);

      expect(body).toBe(JSON.stringify({ totalMediums: TOTAL_MEDIUMS_SYNC }));
      expect(status).toBe(200);
      expect(type).toBe("application/json");
    });

    it("should catch internal errors", async () => {
      MediumService.prototype.syncMediums = jest
        .fn()
        .mockRejectedValue(new Error("internal error."));

      const { status, type, body } = await api.mediumsSync(EMPTY_REQUEST);

      expect(status).toBe(500);
      expect(type).toBe("application/json");
      expect(body).toEqual(JSON.stringify({ error: "internal error." }));
    });
  });
});
