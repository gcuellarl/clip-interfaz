const API = {
  MEDIUM: Symbol.for("Medium API"),
  SECTION: Symbol.for("Section API"),
  IDPP: Symbol.for("IDPP API"),
  PROCESS: Symbol.for("Process API"),
};

const SERVICE = {
  MEDIUM: Symbol.for("Medium Service"),
  SECTION: Symbol.for("Section Service"),
  IDPP: Symbol.for("IDPP Service"),
  PROCESS: Symbol.for("Process Service"),
};

const UTIL = {
  UUID: Symbol.for("UUID"),
  MYSQLPOOL: Symbol.for("MYSQLPOOL"),
  MYSQLPOOLEFINFO: Symbol.for("MYSQLPOOLEFINFO"),
};

const REPOSITORY = {
  MEDIUM: Symbol.for("Medium repository"),
  SECTION: Symbol.for("Section repository"),
  IDPP: Symbol.for("IDPP repository"),
  IMAGE: Symbol.for("Image Service"),
};

const MAPPER = {
  MEDIUM: Symbol.for("Medium mapper"),
  SECTION: Symbol.for("Section mapper"),
  IDPP: Symbol.for("IDPP mapper"),
  IMAGE: Symbol.for("Image mapper"),
};

const TYPES = {
  API,
  SERVICE,
  UTIL,
  REPOSITORY,
  MAPPER,
};

export { TYPES };
