export class task {
  /* In this example we are using a shortcut from Typescript to create variables without declaring them */
  constructor(
    private _name: string,
    private _quantity: number,
    private _completed: boolean
  ) {}

  get name(): string {
    return this._name;
  }

  get time(): number {
    return this._quantity;
  }

  get completed(): boolean {
    return this._completed;
  }

  set time(quantity: number) {
    this._quantity = quantity;
  }

  set name(name: string) {
    this._name = name;
  }

  set completed(completed: boolean) {
    this._completed = completed;
  }
}
