import { ThisReceiver } from "@angular/compiler";

export class TodoItem {
    constructor(private _todo: string, private _isCompleted: boolean, private _isPostponed: boolean) {}

    get todo(): string {
        return this._todo;
      }
  
      get isCompleted(): boolean{
        return this._isCompleted;
      }

      get isPostponed(): boolean{
        return this._isPostponed;
      }
     
      set todo(todo: string) {
        this._todo = todo;
      }

      set isCompleted(isCompleted: boolean){
        this._isCompleted = isCompleted;
      }

      set isPostponed(isPostponed: boolean){
        this._isPostponed = isPostponed;
      }

}
