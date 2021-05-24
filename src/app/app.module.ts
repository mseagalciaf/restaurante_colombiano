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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Material
import { MatDialogModule } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';

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
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, 
    FormsModule,
    //Angular Material
    BrowserAnimationsModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatBadgeModule,
    MatButtonModule
    
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
