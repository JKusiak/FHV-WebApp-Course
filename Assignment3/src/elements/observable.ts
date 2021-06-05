export class Observable {
    value: number = 0;
    observers: any[];

    constructor() {
      this.observers = [];
    }
  
    subscribe(f:any) {
      this.observers.push(f);
    }

    unsubscribe(f:any) {
      this.observers = this.observers.filter(subscriber => subscriber !== f);
    }

    notify(data:any) {
      this.observers.forEach(observer => observer(data));
    }
  }