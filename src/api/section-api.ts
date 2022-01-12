import { inject, injectable } from "inversify";

import { HttpRequest, HttpResponse } from "../interfaces/ihttp";
import ResponseHandler from "./response-handler";

import SectionService from "../services/section-service";
import SectionMapper from "../domain/section/section-mapper";
import { TYPES } from "../inversify.types";
import { NextApiRequest } from "next";
import InvalidParamsError from "../errors/invalid-params-error";

@injectable()
export default class SectionAPI {
  constructor(@inject(TYPES.SERVICE.SECTION) private service: SectionService) {}

  async getAll(_request: HttpRequest): Promise<HttpResponse> {
    try {
      const resultSections = await this.service.getAll();

      return ResponseHandler.json(200, {
        sections: resultSections.map((section) =>
          SectionMapper.toJson(section)
        ),
      });
    } catch (error: any) {
      return ResponseHandler.error(error);
    }
  }

  async sectionSync(request: HttpRequest): Promise<HttpResponse> {
    try {
      const totalSections = await this.service.syncSections();
      return ResponseHandler.json(200, { totalSections });
    } catch (error: any) {
      return ResponseHandler.error(error);
    }
  }

  async getByMediumId(request: HttpRequest): Promise<HttpResponse> {
    try {
      const { idMedium } = request.query;
      const id = parseInt(idMedium as string);

      if (isNaN(id)) {
        throw new InvalidParamsError("idMedium is not a number.");
      }

      const sectionsResult = await this.service.getByMediumId(id);

      return ResponseHandler.json(200, {
        sections: sectionsResult.map((section) =>
          SectionMapper.toJson(section)
        ),
      });
    } catch (error) {
      return ResponseHandler.error(error);
    }
  }
}
