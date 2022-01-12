import { injectable, inject } from "inversify";
import { TYPES } from "../../inversify.types";

import IMysqlPool from "../../utils/imysql-pool";

import IDPP from "./idpp";

@injectable()
export default abstract class IIDPPRepository {
  constructor(
    @inject(TYPES.UTIL.MYSQLPOOL) protected mysqlPool: IMysqlPool,
    @inject(TYPES.UTIL.MYSQLPOOLEFINFO)
    protected mysqlPoolEfinfo: IMysqlPool
  ) {}

  abstract getAll(): Promise<IDPP[]>;
  abstract getAllIdpp(): Promise<IDPP[]>;
  abstract saveIdpp(idpp: IDPP[]): Promise<number>;
}
