import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { RealizationsComponent } from './pages/realizations/realizations.component';
import { ReferenceComponent } from './pages/reference/reference.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ContactComponent,
    HomeComponent,
    RealizationsComponent,
    ReferenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
