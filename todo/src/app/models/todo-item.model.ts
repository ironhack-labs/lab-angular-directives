export class TodoItem {
  /* In this example we are using a shortcut from Typescript to create variables without declaring them */
  constructor(
    private _name: string,
    private _isDone: boolean,
    private _isPostpone: boolean
  ) {}

  /* GET */

  get name(): string {
    return this._name;
  }

  get isDone(): boolean {
    return this._isDone;
  }

  get isPostpone(): boolean {
    return this._isPostpone;
  }

  /* SET */

  set name(name: string) {
    this._name = name;
  }

  set isDone(isDone: boolean) {
    this._isDone = isDone;
    console.log('SET isDone is clicked');
  }

  set isPostpone(isPostpone: boolean) {
    this._isPostpone = isPostpone;
    console.log('SET isPostpone is clicked');
  }

  /* set isPostpone(isPostpone: boolean) {
    this._isPostpone = isPostpone;
    console.log('Set isPostpone is clicked');
  } */
}
