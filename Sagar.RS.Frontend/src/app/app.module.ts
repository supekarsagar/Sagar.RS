import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './_Shared/Components/header/header.component';
import { FooterComponent } from './_Shared/Components/footer/footer.component';
import { SideMenuComponent } from './_Shared/Components/side-menu/side-menu.component';
 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports:[
    SideMenuComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
