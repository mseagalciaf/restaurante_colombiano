import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplatePrincipalComponent } from './templates/template-principal/template-principal.component';
import { HeaderComponent } from './templates/components/header/header.component';
import { FooterComponent } from './templates/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplatePrincipalComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
