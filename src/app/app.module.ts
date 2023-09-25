import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import {MatIconModule} from '@angular/material/icon';
import { SidebarButtonDirective } from './sidebar-button.directive';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SearchComponent,
    HomeComponent,
    SidebarButtonDirective
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
