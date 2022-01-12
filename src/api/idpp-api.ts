import { TYPES } from "../inversify.types";
import { inject, injectable } from "inversify";

import ResponseHandler from "./response-handler";
import { HttpRequest, HttpResponse } from "../interfaces/ihttp";

import IDPPService from "../services/idpp-service";
import IDPPMapper from "../domain/idpp/idpp-mapper";

@injectable()
export default class IdppAPI {
  constructor(@inject(TYPES.SERVICE.IDPP) private service: IDPPService) {}

  async getAll(_request: HttpRequest): Promise<HttpResponse> {
    try {
      const resultIdpp = await this.service.getAll();

      return ResponseHandler.json(200, {
        idpps: resultIdpp.map((idpp) => IDPPMapper.toJson(idpp)),
      });
    } catch (error: any) {
      return ResponseHandler.error(error);
    }
  }

  async SyncIdpp(request: HttpRequest): Promise<HttpResponse> {
    try {
      const totalIdpp = await this.service.SyncIdpp();
      return ResponseHandler.json(200, { totalIdpp });
    } catch (error: any) {
      return ResponseHandler.error(error);
    }
  }
}
