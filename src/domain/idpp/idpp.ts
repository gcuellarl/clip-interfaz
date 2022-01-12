export default class IDPP {
  private readonly _id: number;
  private readonly _section: string;
  private readonly _description: string;
  private readonly _active: number;

  constructor(props: any) {
    this._id = props.id;
    this._section = props.section;
    this._description = props.description;
    this._active = props.active;
  }

  public get id() {
    return this._id;
  }

  public get section() {
    return this._section;
  }

  public get description() {
    return this._description;
  }

  public get active() {
    return this._active;
  }
}
