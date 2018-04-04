import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class SharedService {

  public itemShared$: EventEmitter<any>;

  constructor() {
    this.itemShared$ = new EventEmitter();
  }


  public share(item: any): void {
    this.itemShared$.emit(item);
  }

}
