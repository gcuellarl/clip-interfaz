export default class Image {
  private readonly _id: number;
  private readonly _date: string;
  private readonly _mediumId: number;
  private readonly _sectionId: number;
  private readonly _section: string;
  private readonly _page: number;
  private readonly _metadata: string;
  private readonly _text: string;
  private readonly _idppId: number;
  private readonly _active: number;
  private readonly _path: string;

  constructor(props: any) {
    this._id = props.id;
    this._date = props.date;
    this._mediumId = props._mediumId;
    this._sectionId = props._sectionId;
    this._section = props._section;
    this._page = props._page;
    this._metadata = props._metadata;
    this._text = props._text;
    this._idppId = props._idppId;
    this._active = props._active;
    this._path = props._path;
  }

  public get id() {
    return this._id;
  }

  public get date() {
    return this._date;
  }

  public get mediumId() {
    return this._mediumId;
  }

  public get sectionId() {
    return this._sectionId;
  }

  public get section() {
    return this._section;
  }

  public get page() {
    return this._page;
  }

  public get metadata() {
    return this._metadata;
  }

  public get text() {
    return this._text;
  }

  public get idppId() {
    return this._idppId;
  }

  public get active() {
    return this._active;
  }

  public get path() {
    return this._path;
  }
}
