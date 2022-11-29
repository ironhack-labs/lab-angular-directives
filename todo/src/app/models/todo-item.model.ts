export class TodoItem {
  /* In this example we are using a shortcut from Typescript to create variables without declaring them */
  constructor(private _name: string, private _isDone: boolean, private _isPostpone: boolean) {}

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get isDone(): boolean {
    return this._isDone;
  }

  set isDone(isDone: boolean) {
    this._isDone = isDone;
  }

  get isPostpone(): boolean {
    return this.isPostpone;
  }

  set isPostpone(isPostpone: boolean) {
    this.isPostpone = isPostpone;
  }  
}
