import { Component, OnInit } from '@angular/core';
import {WtcHistory} from "../../models/wtc-history";
import {WtcHistoryService} from "../../services/wtc-history.service";

@Component({
  selector: 'app-wtc-history-overview',
  templateUrl: './wtc-history-overview.component.html'
})
export class WtcHistoryOverviewComponent implements OnInit {

  public history: WtcHistory;

  constructor(private wtcHistoryService: WtcHistoryService) { }

  ngOnInit() {
    this.wtcHistoryService.getWtcHistory().then(history => this.history = history);
  }

}
