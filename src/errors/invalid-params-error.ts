import Error from "../interfaces/ierror";

export default class InvalidParamsError extends Error {
  constructor(message: string) {
    super(message);
    this._message = message ? message : "invalid params.";
  }
}
