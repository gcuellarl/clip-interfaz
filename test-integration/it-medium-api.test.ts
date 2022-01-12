import ApiFetcher from "./utils/api-fetcher";

import handler from "../pages/api/medium";
import handlerSync from "../pages/api/medium/sync";

describe("Medium APi", () => {
  describe("Sync", () => {
    it("should sync table DBNotas.Medios with table localhost.Medios ", async () => {
      const responseSync = await ApiFetcher.put(handlerSync);

      const { totalMediums } = await responseSync.json();

      const response = await ApiFetcher.get(handler);
      const { mediums } = await response.json();

      expect(totalMediums).toBe(4);
      expect(mediums).toEqual([
        { id: 4, name: "Medio Diario Inactivo", active: 0 },
        { id: 5, name: "Medio Diario Activo", active: 1 },
        { id: 6, name: "Medio Revistas Inactivo", active: 0 },
        { id: 7, name: "Medio Revistas Activo", active: 1 },
      ]);
    });
  });
});
