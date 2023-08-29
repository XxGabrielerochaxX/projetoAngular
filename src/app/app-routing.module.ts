import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { InfoComponent } from './info/info.component';
import { InicioComponent } from './inicio/inicio.component';
import { CasadecComponent } from './casadec/casadec.component';
import { AcessoriosComponent } from './acessorios/acessorios.component';
import { VestuComponent } from './vestu/vestu.component';
import { LoginComponent } from './login/login.component';




const routes: Routes = [
  { path: "", redirectTo: 'inicio', pathMatch: 'full' },
  { path: "contato", component: ContatoComponent },
  { path: "info", component: InfoComponent },
  { path: "inicio", component: InicioComponent },
  { path: "casadec", component: CasadecComponent },
  { path: "acessorios", component: AcessoriosComponent },
  {path: "vestu", component: VestuComponent},
  {path: "login", component: LoginComponent},
 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
