import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acesso-cliente',
  templateUrl: './acesso-cliente.component.html',
  styleUrls: ['./acesso-cliente.component.css']
})
export class AcessoClienteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //método executado no evento (submit) do formulário
  autenticarCliente(formAcesso) : void {
    console.log(formAcesso);
  }

}
