import { inject, injectable } from "inversify";
import { TYPES } from "../inversify.types";

import { HttpRequest, HttpResponse } from "../interfaces/ihttp";

import ResponseHandler from "./response-handler";

import MediumService from "../services/medium-service";
import MediumMapper from "../domain/medium/medium-mapper";

@injectable()
export default class MediumApi {
  constructor(@inject(TYPES.SERVICE.MEDIUM) private service: MediumService) {}

  async getAll(_request: HttpRequest): Promise<HttpResponse> {
    try {
      const mediums = await this.service.getAll();

      return ResponseHandler.json(200, {
        mediums: mediums.map((medium) => MediumMapper.toJson(medium)),
      });
    } catch (error: any) {
      return ResponseHandler.error(error);
    }
  }

  async mediumsSync(request: HttpRequest): Promise<HttpResponse> {
    try {
      const totalMediums = await this.service.syncMediums();
      return ResponseHandler.json(200, { totalMediums });
    } catch (error: any) {
      return ResponseHandler.error(error);
    }
  }
}
