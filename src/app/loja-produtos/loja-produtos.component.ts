import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-loja-produtos',
  templateUrl: './loja-produtos.component.html',
  styleUrls: ['./loja-produtos.component.css']
})
export class LojaProdutosComponent implements OnInit {

  //atributos (dados)
  produtos = []; //array vazio
  produto = { //objeto para armazenar os dados do produto selecionado
    id : '', nome : '', preco : 0, descricao : ''
  }

  //Injeção de dependência
  constructor(private httpClient:HttpClient) { }

  //função executada antes do componente ser renderizado
  ngOnInit(): void {
    this.consultarProdutos();
  }

  //função para acessar a API e consultar os produtos
  consultarProdutos() : void {
    
      //realizando uma chamada GET para consultar produtos na API..
      this.httpClient.get(environment.apiEcommerce + "api/produtos")
        .subscribe( //recebendo o PROMISSE da API (retorno)
          (data:any[]) => { //recebendo o PROMISSE de sucesso da API
            //armazenar os produtos obtidos da API..
            this.produtos = data;
          },
          e => { //recebendo o PROMISSE de erro da API
            console.log(e);
          }
        );
  }

  //função executada atraves do evento click do botão
  obterProduto(item) : void {
    this.produto = item;
  }

}
