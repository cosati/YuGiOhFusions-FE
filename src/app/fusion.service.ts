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
  public fusions: Fusion[];

  constructor(
    private httpClient: HttpClient
  ) { }

  public addFusions(fusionList: Fusion[]) {
    this.fusions = fusionList;
  }

  public getFusions(cards: Card[]): Observable<any> {
    console.log(cards);
    let queryParams = new HttpParams();
    cards.forEach(card => queryParams = queryParams.append("cardIds", card.id));
    console.log(queryParams);
    //let tempurl = "http://localhost:8080/YuGiOhFusions/cards/fusions?cardIds=1&cardIds=2&cardIds=3&cardIds=4&cardIds=5&cardIds=6&cardIds=7&cardIds=8&cardIds=9&cardIds=10&cardIds=12&cardIds=11&cardIds=37&cardIds=38&cardIds=39&cardIds=40";
    return this.httpClient.get(this.baseUrl, {params:queryParams});
  }

  public clearFusions() {
    this.fusions = [];
  }

  public getFusionList() {
    return this.fusions;
  }

}
