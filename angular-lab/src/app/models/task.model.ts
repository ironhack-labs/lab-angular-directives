export class task {
  /* In this example we are using a shortcut from Typescript to create variables without declaring them */
  constructor(
    private _name: string,
    private _completed: boolean,
    private _postponed: boolean
  ) {}

  get name(): string {
    return this._name;
  }

  get completed(): boolean {
    return this._completed;
  }

  get postponed(): boolean {
    return this._postponed;
  }

  set name(name: string) {
    this._name = name;
  }

  set completed(completed: boolean) {
    this._completed = completed;
  }

  set postponed(postponed: boolean) {
    this._postponed = postponed;
  }
}
