import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateAdminComponent } from './templates/template-admin/template-admin.component';
import { TemplatePrincipalComponent } from './templates/template-principal/template-principal.component';

const routes: Routes = [
  {
    path:'', component: TemplatePrincipalComponent, children:[
      
      {
        path:'home', 
        loadChildren: () => import('./ecomerce/pages/home/home.module').then(mod => mod.HomeModule)
      },
      {
        path:'', redirectTo: '/home', pathMatch:'full'
      }

    ]
  },
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)
  },
  {
    path:'admin', component: TemplateAdminComponent, children:[
      {
        
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
