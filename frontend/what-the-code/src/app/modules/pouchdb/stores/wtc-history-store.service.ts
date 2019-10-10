import {Injectable} from "@angular/core";
import {StoreBase} from "./store.base";
import PouchDB from 'pouchdb';

@Injectable({
  providedIn: 'root',
})
export class WtcHistoryStoreService extends StoreBase {
  private readonly isInstantiated: boolean;
  private readonly store: any;
  private pouchdbName = 'wtc-history-store';

  constructor() {
    super();
    if (!this.isInstantiated) {
      this.store = new PouchDB(this.pouchdbName);
      this.isInstantiated = true;
    }
  }

  protected getStore() {
    return this.store;
  }
}
