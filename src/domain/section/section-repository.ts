import { injectable } from "inversify";

import Section from "./section";
import ISectionRepository from "./section-irepository";

@injectable()
export default class SectionRepository extends ISectionRepository {
  async getAll(): Promise<Section[]> {
    try {
      const pool = await this.mysqlPool.getPool();

      const sections = await pool.query(
        "SELECT id, idMedium, name, active, type FROM secciones"
      );

      return sections[0].map((props: any) => new Section(props));
    } catch (error) {
      throw new Error(`Section Repository (getAll): ${error}`);
    }
  }

  async getAllFolletos(): Promise<Section[]> {
    const POOLEFINFO = await this.mysqlPoolEfinfo.getPool();
    try {
      const query =
        "SELECT folletos.ID as id, folletos.IDMedio as idMedium, folletos.Folleto as name," +
        " folletos.Activo as active, folletos.Tipo as type" +
        " FROM `folletos` INNER JOIN medios ON folletos.ID = medios.ID";
      const result = await POOLEFINFO.query(query);

      return result[0].map((props: any) => new Section(props));
    } catch (error) {
      throw new Error(`Section Repository (getAllFolletos): ${error}`);
    }
  }

  async saveSections(Sections: Section[]): Promise<number> {
    const pool = await this.mysqlPool.getPool();

    let values: string[] = [];
    Sections.forEach(({ id, idMedium, name, active, type }) => {
      values.push(`(${id}, ${idMedium} ,'${name}', ${active}, '${type}')`);
    });
    try {
      const query =
        "INSERT INTO secciones VALUES " +
        values.join(",") +
        " ON DUPLICATE KEY UPDATE name = VALUES(name), active = VALUES(active), type = VALUES(type)";

      const result = await pool.query(query);
      const { affectedRows } = result[0];
      return affectedRows;
    } catch (error) {
      throw new Error(`Section Repository (saveSections): ${error}`);
    }
  }

  async getByMediumId(idMedium: number): Promise<Section[]> {
    try {
      const pool = await this.mysqlPool.getPool();

      const sections = await pool.query(
        `SELECT id, idMedium, name, active, type FROM secciones WHERE idMedium = ${idMedium}`
      );
      return sections[0].map((props: any) => new Section(props));
    } catch (error) {
      throw new Error(`Section Repository (getByMediumId): ${error}`);
    }
  }
}
