import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from './shared/cards';
import { Fusion } from './shared/Fusion';

@Injectable({
  providedIn: 'root'
})
export class FusionService {
  private baseUrl = "http://localhost:8080/YuGiOhFusions/cards/fusions?";
  private fusions: Fusion[];

  constructor(
    private httpClient: HttpClient
  ) { }

  public addFusions(fusionList: Fusion[]) {
    this.fusions = fusionList;
  }

  public getFusions(cards: Card[]): Observable<any> {
    console.log(cards);
    /*let queryParams = new HttpParams();
    cards.forEach(card => queryParams.append("cardIds", card.id));
    console.log(queryParams);*/
    let tempurl = "http://localhost:8080/YuGiOhFusions/cards/fusions?cardIds=264&cardIds=395&cardIds=130";
    cards.forEach(card => {
      this.baseUrl += "cardIds=";
      this.baseUrl += card.id;
      this.baseUrl += "&";
    });
    console.log(tempurl);
    return this.httpClient.get(/*this.baseUrl, {params:queryParams}*/tempurl);
  }

  public clearFusions() {
    this.fusions = [];
  }

  public getFusionList() {
    return this.fusions;
  }

}
