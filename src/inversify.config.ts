import { Container } from "inversify";
import { TYPES } from "./inversify.types";

const myContainer = new Container();

//MEDIUM
import MediumAPI from "./api/medium-api";
import MediumService from "./services/medium-service";
import IMediumRepository from "./domain/medium/medium-irepository";
import MediumRepository from "./domain/medium/medium-repository";
import MediumMapper from "./domain/medium/medium-mapper";

myContainer.bind<MediumAPI>(TYPES.API.MEDIUM).to(MediumAPI);
myContainer.bind<MediumService>(TYPES.SERVICE.MEDIUM).to(MediumService);
myContainer
  .bind<IMediumRepository>(TYPES.REPOSITORY.MEDIUM)
  .to(MediumRepository);

myContainer.bind<MediumMapper>(TYPES.MAPPER.MEDIUM).to(MediumMapper);

//SECTION
import SectionAPI from "./api/section-api";
import SectionService from "./services/section-service";
import ISectionRepository from "./domain/section/section-irepository";
import SectionRepository from "./domain/section/section-repository";
import SectionMapper from "./domain/section/section-mapper";

myContainer.bind<SectionAPI>(TYPES.API.SECTION).to(SectionAPI);
myContainer.bind<SectionService>(TYPES.SERVICE.SECTION).to(SectionService);
myContainer
  .bind<ISectionRepository>(TYPES.REPOSITORY.SECTION)
  .to(SectionRepository);
myContainer.bind<SectionMapper>(TYPES.MAPPER.SECTION).to(SectionMapper);

//UUID & MYSQL
import { UUID } from "./utils";
import { IUUID } from "./utils/interfaces";
import IMysqlPool from "./utils/imysql-pool";
import MysqlPoolEnfinfo from "./utils/mysql-pool-efinfo";
import MysqlPool from "./utils/mysql-pool-local";

myContainer.bind<IUUID>(TYPES.UTIL.UUID).to(UUID);
myContainer
  .bind<IMysqlPool>(TYPES.UTIL.MYSQLPOOL)
  .to(MysqlPool)
  .inSingletonScope();
myContainer
  .bind<IMysqlPool>(TYPES.UTIL.MYSQLPOOLEFINFO)
  .to(MysqlPoolEnfinfo)
  .inSingletonScope();

//IDPP
import IdppAPI from "./api/idpp-api";
import IDPPService from "./services/idpp-service";
import IIDPPRepository from "./domain/idpp/idpp-irepository";
import IDPPRepository from "./domain/idpp/idpp-repository";
import IDPPMapper from "./domain/idpp/idpp-mapper";

myContainer.bind<IdppAPI>(TYPES.API.IDPP).to(IdppAPI);
myContainer.bind<IDPPService>(TYPES.SERVICE.IDPP).to(IDPPService);
myContainer.bind<IIDPPRepository>(TYPES.REPOSITORY.IDPP).to(IDPPRepository);
myContainer.bind<IDPPMapper>(TYPES.MAPPER.IDPP).to(IDPPMapper);

//Image
import IImageRepository from "./domain/images/image-irepository";
import ImageRepository from "./domain/images/image-repository";

myContainer.bind<IImageRepository>(TYPES.REPOSITORY.IMAGE).to(ImageRepository);

export { myContainer };
