import { HttpResponse } from "../interfaces/ihttp";

import MissingParamsError from "../errors/missing-params-error";
import InvalidParamsError from "../errors/invalid-params-error";

export default class ResponseHandler {
  static json(status: number, body: any) {
    return {
      status,
      type: "application/json",
      body: JSON.stringify(body),
    };
  }

  static error(error: any): HttpResponse {
    let status = 500;

    if (error instanceof MissingParamsError) {
      status = 400;
    }

    if (error instanceof InvalidParamsError) {
      status = 400;
    }

    return {
      status,
      type: "application/json",
      body: JSON.stringify({ error: error.message }),
    };
  }
}
