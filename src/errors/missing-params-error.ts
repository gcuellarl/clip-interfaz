import Error from "../interfaces/ierror";

export default class MissingParamsError extends Error {
  constructor(message: string) {
    super(message);
    this._message = message ? message : "missing params.";
  }
}
