import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplatePrincipalComponent } from './templates/template-principal/template-principal.component';
import { HeaderComponent } from './templates/components/header/header.component';
import { FooterComponent } from './templates/components/footer/footer.component';
import { TemplateAdminComponent } from './templates/template-admin/template-admin.component';
import { SidebarComponent } from './templates/components/sidebar/sidebar.component';
import { TopbarComponent } from './templates/components/topbar/topbar.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms'
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { TopNavbarMainComponent } from './templates/components/top-navbar-main/top-navbar-main.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplatePrincipalComponent,
    HeaderComponent,
    FooterComponent,
    TemplateAdminComponent,
    SidebarComponent,
    TopbarComponent,
    TopNavbarMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
