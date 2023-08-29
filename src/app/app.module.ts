import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { TopoComponent } from './topo/topo.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ContatoComponent } from './contato/contato.component';
import { InfoComponent } from './info/info.component';
import { InicioComponent } from './inicio/inicio.component';
import { AcessoriosComponent } from './acessorios/acessorios.component';
import { CasadecComponent } from './casadec/casadec.component';
import { VestuComponent } from './vestu/vestu.component';
import { LoginComponent } from './login/login.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { PanosComponent } from './produtos/panos/panos.component';
import { CamisetasComponent } from './produtos/camisetas/camisetas.component';




@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    RodapeComponent,
    ContatoComponent,
    InfoComponent,
    InicioComponent,
    AcessoriosComponent,
    CasadecComponent,
    VestuComponent,
    LoginComponent,
    ProdutosComponent,
    PanosComponent,
    CamisetasComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   MatButtonModule,
   MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
