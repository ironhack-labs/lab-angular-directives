export class ToDoTask {
    /* In this example we are using a shortcut from Typescript to create variables without declaring them */
    constructor(private _name: string, private _quantity: number) {}
   
    get name(): string {
      return this._name;
    }
   
    get time(): number {
      return this._quantity;
    }
   
    set time(quantity: number) {
      this._quantity = quantity;
    }
   
    set name(name: string) {
      this._name = name;
    }
  }