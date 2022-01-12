export default class Medium {
  private readonly _id: number;
  private readonly _name: string;
  private readonly _active: number;

  constructor(props: any) {
    this._id = props.id;
    this._name = props.name;
    this._active = props.active;
  }

  public get id() {
    return this._id;
  }

  public get name() {
    return this._name;
  }

  public get active() {
    return this._active;
  }
}
