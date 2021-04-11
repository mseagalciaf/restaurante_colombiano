import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplatePrincipalComponent } from './templates/template-principal/template-principal.component';
import { HeaderComponent } from './templates/components/header/header.component';
import { FooterComponent } from './templates/components/footer/footer.component';
import { TemplateAdminComponent } from './templates/template-admin/template-admin.component';
import { SidebarComponent } from './templates/components/sidebar/sidebar.component';
import { TopbarComponent } from './templates/components/topbar/topbar.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    TemplatePrincipalComponent,
    HeaderComponent,
    FooterComponent,
    TemplateAdminComponent,
    SidebarComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
