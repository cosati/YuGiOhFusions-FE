import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HandComponent} from './hand/hand.component';
import { CardListComponent } from './card-list/card-list.component';
import { FusionsComponent } from './fusions/fusions.component';

const routes: Routes = [
  { path: '', component: CardListComponent },
  { path: 'hand', component: HandComponent },
  { path: 'fusions', component: FusionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }