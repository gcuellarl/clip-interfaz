export default abstract class Error {
  protected _message: string;

  protected constructor(message: string) {
    this._message = message;
  }

  get message(): string {
    return this._message;
  }
}
