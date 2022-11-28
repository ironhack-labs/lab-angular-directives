export class toDoItem{
    constructor(private _name: string, private _isDone: boolean, private _isPostponed: boolean) {}
    
    get name(): string{
        return this._name;

    }
    get isDone(): boolean{
        return this._isDone;
    }
    get isPostponed(): boolean{
        return this._isPostponed;
    }

    set name(name:string){
        this._name = name;
    }
    set isDone(isDone:boolean){
        this._isDone = isDone;
    }
    set isPostponed(isPostponed:boolean){
        this._isPostponed = isPostponed;
    }
}