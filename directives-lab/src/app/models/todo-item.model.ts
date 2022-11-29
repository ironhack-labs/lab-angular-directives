export class TodoItem {
    // private isCompleted : boolean;
    // private todo: string;
    // private isPostponed:boolean;
    
    constructor(private _todo : string,private _isCompleted:boolean = false,private _isPostponed:boolean= false) {
    }
 
    get todo() : string {
        return this._todo;
    }

    set todo(todo : string) {
        this._todo = todo;
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



    
}
