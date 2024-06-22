import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiltersComponent } from './filters/filters.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path:"", component:FiltersComponent },
  { path:"", component:SearchResultsComponent, outlet:'detailInfo'},
  { path:"details/:id", component:DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
