
export class ToDoItem {
    constructor(private _itemName: string, private _isCompleted: boolean) { }

    get name(): string {
        return this._itemName;
    }

    get completed(): boolean {
        return this._isCompleted;
    }

    set name(name: string) {
        this._itemName = name;
    }

    set completed(completed: boolean) {
        this._isCompleted = completed;
    }

}