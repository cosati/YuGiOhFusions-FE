import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardListComponent } from './card-list/card-list.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { HandComponent } from './hand/hand.component';
import { AppRoutingModule } from './app-routing.module';
import { FusionsComponent } from './fusions/fusions.component';
import { cardFilterPipe } from './callback.pipe';
import { FusionComponent } from './fusion/fusion.component';
import { HttpClientModule } from '@angular/common/http';
import { CardService } from './card.service';

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    HeaderComponent,
    CardComponent,
    HandComponent,
    FusionsComponent,
    cardFilterPipe,
    FusionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
