export default class Section {
  private readonly _id: number;
  private readonly _idMedium: number;
  private readonly _name: string;
  private readonly _active: number;
  private readonly _type: string;

  constructor(props: any) {
    this._id = props.id;
    this._idMedium = props.idMedium;
    this._name = props.name;
    this._active = props.active;
    this._type = props.type;
  }

  public get id() {
    return this._id;
  }
  public get idMedium() {
    return this._idMedium;
  }
  public get name() {
    return this._name;
  }
  public get active() {
    return this._active;
  }
  public get type() {
    return this._type;
  }
}
