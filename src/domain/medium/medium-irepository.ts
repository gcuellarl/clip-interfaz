import { injectable, inject } from "inversify";

import { TYPES } from "../../inversify.types";

import IMysqlPool from "../../utils/imysql-pool";
import Medium from "./medium";

@injectable()
export default abstract class IMediumRepository {
  constructor(
    @inject(TYPES.UTIL.MYSQLPOOL) protected mysqlPool: IMysqlPool,
    @inject(TYPES.UTIL.MYSQLPOOLEFINFO) protected mysqlPoolEfinfo: IMysqlPool
  ) {}

  abstract getAll(): Promise<Medium[]>;
  abstract getAllPrensa(): Promise<Medium[]>;
  abstract saveMedios(mediums: Medium[]): Promise<number>;
}
