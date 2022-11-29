export class TodoList {
  /* In this example we are using a shortcut from Typescript to create variables without declaring them */
  constructor(private _name: string, private _isDone: boolean) {}

  get name(): string {
    return this._name;
  }

  get isDone(): boolean {
    return this._isDone;
  }

  set isDone(isDone: boolean) {
    this._isDone = isDone;
  }

  set name(name: string) {
    this._name = name;
  }
}
