export class TodoItem {
    // private todoNamr: string;
    // private isCompleted : boolean;
    // private isPostponed:boolean;
    
    constructor(private _todoName : string, private _isCompleted:boolean = false, private _isPostponed:boolean= false, private _isSelected = false) {
    }
 
    get todoName() : string {
        return this._todoName;
    }

    set todoName(todoName : string) {
        this._todoName = todoName;
    }

    get isCompleted() : boolean {
        return this._isCompleted;
    }

    set isCompleted(isCompleted : boolean) {
        this._isCompleted = isCompleted;
    }

    get isPostponed() : boolean {
        return this._isPostponed;
    }

    set isPostponed(isPostponed : boolean) {
        this._isPostponed = isPostponed;
    }

    get isSelected() : boolean {
        return this._isSelected;
    }

    set isSelected(isSelected : boolean) {
        this._isSelected = isSelected;
    }



    
}
