import ApiFetcher from "./utils/api-fetcher";

import handler from "../pages/api/idpp";
import handlerSync from "../pages/api/idpp/sync";

describe("IDPP Api", () => {
  describe("Sync", () => {
    it("should sync table DBNotas.seccionesplanacompleta with table localhost.idpp ", async () => {
      const responseSync = await ApiFetcher.put(handlerSync);

      const { totalIdpp } = await responseSync.json();

      const response = await ApiFetcher.get(handler);

      const { idpps } = await response.json();

      expect(totalIdpp).toBe(3);
      expect(idpps).toEqual([
        { id: 1, section: "  ", description: "Ninguna", active: 0 },
        {
          id: 2,
          section: "PP Color",
          description: "Primeras Planas General Color",
          active: 1,
        },
        {
          id: 3,
          section: "PF Color",
          description: "Primeras Planas Financieras Color",
          active: 1,
        },
      ]);
    });
  });
});
