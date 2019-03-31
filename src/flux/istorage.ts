'use strict';

import {IEvent} from './ievent'
import {Dispatcher} from './dispatcher';

export class IStorage {
  get dispatcher(): Dispatcher {
    return this._dispatcher;
  }

  private readonly _dispatcher: Dispatcher;

  constructor(dispatcher) {
    this._dispatcher = dispatcher;
    this._dispatcher.subscribe(this);
  }

  handleEvent(event: IEvent) : IEvent {
    return event;
  }
}
