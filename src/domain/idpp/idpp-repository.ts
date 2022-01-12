import { injectable } from "inversify";

import IDPP from "./idpp";
import IIDPPRepository from "./idpp-irepository";

@injectable()
export default class IDPPRepository extends IIDPPRepository {
  async getAll(): Promise<IDPP[]> {
    try {
      const pool = await this.mysqlPool.getPool();

      const idpps = await pool.query(
        "SELECT id, section, description, active FROM idpp"
      );

      return idpps[0].map((props: any) => new IDPP(props));
    } catch (error) {
      throw new Error(`IDPP Repository (getAll): ${error}`);
    }
  }

  async getAllIdpp(): Promise<IDPP[]> {
    try {
      const poolefinfo = await this.mysqlPoolEfinfo.getPool();

      const query =
        "SELECT ID as id, Seccion AS section, Descripcion as description, Activo as active" +
        " FROM seccionesplanacompleta ";
      const idppEfinfo = await poolefinfo.query(query);

      return idppEfinfo[0].map((props: any) => new IDPP(props));
    } catch (error) {
      throw new Error(`IDPP Repository (getAllIdppEfinfo): ${error}`);
    }
  }

  async saveIdpp(idpp: IDPP[]): Promise<number> {
    try {
      const pool = await this.mysqlPool.getPool();
      let values: string[] = [];
      idpp.forEach(({ id, section, description, active }) => {
        values.push(`(${id}, '${section}', '${description}',${active})`);
      });
      const query =
        "INSERT INTO idpp VALUES " +
        values.join(",") +
        " ON DUPLICATE KEY UPDATE section = VALUES(section), description = VALUES(description), active = VALUES(active)";

      const result = await pool.query(query);
      const { affectedRows } = result[0];

      return affectedRows;
    } catch (error) {
      throw new Error(`IDPP Repository (saveIdpp): ${error}`);
    }
  }
}
