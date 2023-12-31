import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { title: "Home", path: "home", component: HomeComponent },
  { path: "", pathMatch: "full", redirectTo: "home"},
  { title: "Search", path: "search", component: SearchComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
