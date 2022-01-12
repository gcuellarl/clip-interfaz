import IdppAPI from "../../src/api/idpp-api";
import IDPPBuilder from "../builders/idpp-builder";
import IDPPService from "../../src/services/idpp-service";
import IDPPMapper from "../../src/domain/idpp/idpp-mapper";

const mockedIDPPService = IDPPService as jest.Mock<IDPPService>;

describe("IDPP API", () => {
  let api = new IdppAPI(new mockedIDPPService());
  const EMPTY_REQUEST = { query: {}, body: null };

  describe("getAll", () => {
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

    beforeEach(() => {
      IDPPService.prototype.getAll = jest
        .fn()
        .mockReturnValueOnce([IDPP_1, IDPP_2]);
    });

    it("should return idpps list", async () => {
      const { status, type, body } = await api.getAll(EMPTY_REQUEST);

      expect(status).toBe(200);
      expect(type).toBe("application/json");
      expect(body).toEqual(
        JSON.stringify({
          idpps: [IDPPMapper.toJson(IDPP_1), IDPPMapper.toJson(IDPP_2)],
        })
      );
    });

    it("should catch internal errors", async () => {
      IDPPService.prototype.getAll = jest
        .fn()
        .mockRejectedValue(new Error("internal error."));

      const { status, type, body } = await api.getAll(EMPTY_REQUEST);

      expect(status).toBe(500);
      expect(type).toBe("application/json");
      expect(body).toEqual(JSON.stringify({ error: "internal error." }));
    });
  });

  describe("SyncIdpp", () => {
    it("should return a total number of idpps", async () => {
      const TOTAL_IDPP_SYNC = 20;
      IDPPService.prototype.SyncIdpp = jest
        .fn()
        .mockReturnValueOnce(TOTAL_IDPP_SYNC);

      const { status, type, body } = await api.SyncIdpp(EMPTY_REQUEST);

      expect(body).toBe(JSON.stringify({ totalIdpp: TOTAL_IDPP_SYNC }));
      expect(status).toBe(200);
      expect(type).toBe("application/json");
    });

    it("should catch internal errors", async () => {
      IDPPService.prototype.SyncIdpp = jest
        .fn()
        .mockRejectedValue(new Error("internal error."));

      const { status, type, body } = await api.SyncIdpp(EMPTY_REQUEST);

      expect(status).toBe(500);
      expect(type).toBe("application/json");
      expect(body).toEqual(JSON.stringify({ error: "internal error." }));
    });
  });
});
