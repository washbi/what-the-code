import {Injectable} from "@angular/core";
import {WtcHistoryStoreService} from "../stores/wtc-history-store.service";
import {WtcHistory} from "../models/wtc-history";
import {fixed_id} from "../models/wtc-history";

@Injectable({
  providedIn: 'root',
})
export class WtcHistoryService {

  constructor(private wtcHistoryStore: WtcHistoryStoreService) {
  }

  public async getWtcHistory(): Promise<WtcHistory> {
    const history = await this.wtcHistoryStore
      .getItem(fixed_id)
      .then((history: WtcHistory) => {
        // history already exists
        history.lastUpdated = new Date();
        this.wtcHistoryStore.updateExistingItem(history, history);
        return history;
      })
      .catch(err => {
        const initHistory: WtcHistory = {
          id: fixed_id,
          historyBirthDate: new Date(),
          lastUpdated: new Date()
        }
        this.wtcHistoryStore.addNewItem(initHistory);
        return initHistory;
      });

    return history;
  }
}
