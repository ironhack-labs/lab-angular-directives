export class ToDoTask {
   
    constructor(private _name: string, private _time: number, private _completed: boolean) {}
   
    get name(): string {
      return this._name;
    }
   
    get time(): number {
      return this._time;
    }

    get completed():boolean {
      return this._completed;
    }
   
    set name(name: string) {
      this._name = name;
    }

    set time(time: number) {
      this._time = time;
    }

    set completed(completed: boolean) {
      this._completed = completed;
    }
    
  }