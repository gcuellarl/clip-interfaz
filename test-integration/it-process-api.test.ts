import ApiFetcher from "./utils/api-fetcher";
import handler from "../pages/api/process";

describe("Process File", () => {
  describe("prcocessFile", () => {
    it("should return the total images processed ", async () => {
      const DATA = {};
      const response = await ApiFetcher.post(handler, DATA);
      const { totalImagenes } = await response.json();
      expect(totalImagenes).toBe(2);
    });
  });
});
