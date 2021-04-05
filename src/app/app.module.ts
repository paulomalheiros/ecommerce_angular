import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LojaProdutosComponent } from './loja-produtos/loja-produtos.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { AcessoClienteComponent } from './acesso-cliente/acesso-cliente.component';
import { CestaDeComprasComponent } from './cesta-de-compras/cesta-de-compras.component';

//biblioteca para realizar as chamadas HTTP para a API..
import { HttpClientModule } from '@angular/common/http';

//biblioteca para manipulação de formulários
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//bibliotecas para mapeamento de rotas no angular
import { Routes, RouterModule } from '@angular/router';

//mapeando um endereço (ROTA, URL) para cada componente
const routes:Routes = [
  { path : 'loja-produtos', component : LojaProdutosComponent },
  { path : 'cadastro-cliente', component : CadastroClienteComponent },
  { path : 'acesso-cliente', component : AcessoClienteComponent },
  { path : 'cesta-de-compras', component : CestaDeComprasComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LojaProdutosComponent,
    CadastroClienteComponent,
    AcessoClienteComponent,
    CestaDeComprasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //registrando a biblioteca para desenvolvimento de formularios
    ReactiveFormsModule, //registrando a biblioteca para desenvolvimento de formularios
    HttpClientModule, //registrando a biblioteca para HTTP client
    RouterModule.forRoot(routes) //registrando as rotas mapeadas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
