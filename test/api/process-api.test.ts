import ProcessApi from "../../src/api/process-api";
import ProcessService from "../../src/services/process-service";

const MockedProcessService = ProcessService as jest.Mock<ProcessService>;

describe("Process API", () => {
  let api = new ProcessApi();
  const EMPTY_REQUEST = { query: {}, body: null };

  describe("process", () => {
    it("should return a total imagenes processed", async () => {
      const TOTAL_IMAGENES_PROCESS = 2;

      const { status, type, body } = await api.process();

      expect(status).toBe(200);
      expect(type).toBe("application/json");
      expect(body).toBe(
        JSON.stringify({ totalImagenes: TOTAL_IMAGENES_PROCESS })
      );
    });
  });
});
