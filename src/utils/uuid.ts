import { injectable } from "inversify";
import { v4, validate } from "uuid";

import { IUUID } from "./interfaces";

@injectable()
export default class UUID implements IUUID {
  makeId(): string {
    return v4();
  }

  isValid(id: string): boolean {
    return validate(id);
  }
}
