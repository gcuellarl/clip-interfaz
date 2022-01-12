import ApiFetcher from "./utils/api-fetcher";
import handler from "../pages/api/section";
import handlerSync from "../pages/api/section/sync";
import handlerByMedium from "../pages/api/section/[idMedium]";

describe("Section APi", () => {
  describe("Sync", () => {
    it("should sync table DBNotas.sections with table localhost.sections ", async () => {
      const responseSync = await ApiFetcher.put(handlerSync);
      const { totalSections } = await responseSync.json();

      const response = await ApiFetcher.get(handler);
      const { sections } = await response.json();

      expect(totalSections).toBe(10);
      expect(sections).toEqual([
        {
          id: 1,
          idMedium: 4,
          name: "MD4 Inactivo",
          active: 0,
          type: "PRINCIPAL",
        },
        {
          id: 2,
          idMedium: 4,
          name: "MD4 Activo",
          active: 1,
          type: "PRINCIPAL",
        },
        {
          id: 3,
          idMedium: 5,
          name: "MD5 Inactivo",
          active: 0,
          type: "PRINCIPAL",
        },
        {
          id: 4,
          idMedium: 5,
          name: "MD5 Activo",
          active: 1,
          type: "PRINCIPAL",
        },
        {
          id: 5,
          idMedium: 6,
          name: "MR6 Inactivo",
          active: 0,
          type: "PRINCIPAL",
        },
        {
          id: 6,
          idMedium: 6,
          name: "MR6 Activo",
          active: 1,
          type: "PRINCIPAL",
        },
        {
          id: 7,
          idMedium: 7,
          name: "MR7 Inactivo",
          active: 0,
          type: "PRINCIPAL",
        },
        {
          id: 8,
          idMedium: 7,
          name: "MR7 Activo",
          active: 1,
          type: "PRINCIPAL",
        },
        {
          id: 9,
          idMedium: 1,
          name: "MA1",
          active: 0,
          type: "PRINCIPAL",
        },
        {
          id: 10,
          idMedium: 9,
          name: "MI1",
          active: 1,
          type: "PRINCIPAL",
        },
      ]);
    });
  });

  describe("getSectionsByMediumId", () => {
    it("should be return sections by medium id", async () => {
      const response = await ApiFetcher.get(handlerByMedium, { idMedium: 4 });
      const { sections } = await response.json();
      expect(sections.length).toBe(2);
      expect(sections).toEqual([
        {
          id: 1,
          idMedium: 4,
          name: "MD4 Inactivo",
          active: 0,
          type: "PRINCIPAL",
        },
        {
          id: 2,
          idMedium: 4,
          name: "MD4 Activo",
          active: 1,
          type: "PRINCIPAL",
        },
      ]);
    });
  });
});
