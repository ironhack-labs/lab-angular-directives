export class ToDoTask {
   
    constructor(private _name: string, private _time: number, private _completed: boolean, private _postponed: boolean) {}
   
    get name(): string {
      return this._name;
    }
   
    get time(): number {
      return this._time;
    }

    get completed():boolean {
      return this._completed;
    }

    get postponed():boolean {
      return this._postponed;
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

    set postponed(postponed: boolean) {
      this._postponed = postponed;
    }
    
  }