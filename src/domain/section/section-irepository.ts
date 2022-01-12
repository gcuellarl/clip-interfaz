import { injectable, inject } from "inversify";

import { TYPES } from "../../inversify.types";

import IMysqlPool from "../../utils/imysql-pool";
import Section from "./section";

@injectable()
export default abstract class ISectionRepository {
  constructor(
    @inject(TYPES.UTIL.MYSQLPOOL) protected mysqlPool: IMysqlPool,
    @inject(TYPES.UTIL.MYSQLPOOLEFINFO) protected mysqlPoolEfinfo: IMysqlPool
  ) {}

  abstract getAll(): Promise<Section[]>;
  abstract getAllFolletos(): Promise<Section[]>;
  abstract saveSections(Sections: Section[]): Promise<number>;
  abstract getByMediumId(idMedium: number): Promise<Section[]>;
}
