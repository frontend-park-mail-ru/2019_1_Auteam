'use strict';

import {IStorage} from './istorage';
import {IEvent} from './ievent';

export class Dispatcher {
  private _storages: IStorage[];

  constructor() {
    this._storages = [];
  }

  subscribe(storage: IStorage) : Dispatcher {
    this._storages.push(storage);
    return this;
  }

  dispatch(event: IEvent) : IEvent {
    this._storages.forEach(function(element) {
      element.handleEvent(event);
    });
    return event;
  }
}
