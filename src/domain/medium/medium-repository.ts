import { injectable } from "inversify";

import Medium from "./medium";
import IMediumRepository from "./medium-irepository";

@injectable()
export default class MediumRepository extends IMediumRepository {
  async getAll(): Promise<Medium[]> {
    try {
      const pool = await this.mysqlPool.getPool();

      const mediums = await pool.query("SELECT id, name, active FROM medios");

      return mediums[0].map((props: any) => new Medium(props));
    } catch (error) {
      throw new Error(`Medium Repository (getAll): ${error}`);
    }
  }

  async getAllPrensa(): Promise<Medium[]> {
    const POOLEFINFO = await this.mysqlPoolEfinfo.getPool();

    const query =
      "SELECT medios.ID as id, medios.nombre as name, medios.activo as active FROM medios " +
      "INNER JOIN tiposmedio ON tiposmedio.ID = medios.IDTipoMedio " +
      "WHERE tiposmedio.Categoria IN ('PRENSA', 'REVISTA') ";
    const mediumsEfinfo = await POOLEFINFO.query(query);

    return mediumsEfinfo[0].map((props: any) => new Medium(props));
  }

  async saveMedios(mediums: Medium[]): Promise<number> {
    const pool = await this.mysqlPool.getPool();
    let values: string[] = [];
    mediums.forEach(({ id, name, active }) => {
      values.push(`(${id}, '${name}', ${active})`);
    });
    const query =
      "INSERT INTO medios VALUES " +
      values.join(",") +
      " ON DUPLICATE KEY UPDATE name = VALUES(name), active = VALUES(active)";

    const result = await pool.query(query);
    const { affectedRows } = result[0];

    return affectedRows;
  }
}
