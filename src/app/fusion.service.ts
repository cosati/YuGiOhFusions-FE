import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from './shared/cards';
import { Fusion } from './shared/Fusion';

@Injectable({
  providedIn: 'root'
})
export class FusionService {
  private baseUrl = "http://localhost:8080/YuGiOhFusions/cards";
  private fusionsUrl = "/fusions";
  private cardFusionsUrl = "/monsters"
  public fusions: Fusion[];

  constructor(
    private httpClient: HttpClient
  ) { }

  public addFusions(fusionList: Fusion[]) {
    this.fusions = fusionList;
  }

  public getFusions(cards: Card[]): Observable<any> {
    // console.log(cards);
    let queryParams = new HttpParams();
    let url = this.baseUrl + this.fusionsUrl;
    cards.forEach(card => queryParams = queryParams.append("cardId", card.id));
    // console.log(queryParams);
    return this.httpClient.get(url, { params:queryParams });
  }
  
  public getCardFusion(card: Card): Observable<any> {
    let queryParams = new HttpParams();
    let url = this.baseUrl + this.cardFusionsUrl;
    queryParams.set("cardId", card.id);
    return this.httpClient.get(url, { params: queryParams });
  }

  public clearFusions() {
    this.fusions = [];
  }

  public getFusionList() {
    return this.fusions;
  }

}
