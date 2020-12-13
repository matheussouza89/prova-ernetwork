import { Cliente } from './../../../../../../back-end/models/Cliente';
import { Cidade } from './../../../../../../back-end/models/Cidade';
import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  cidades : Cidade[] = [
    {nome_cidade:"Franca",codigo:"12-SP",uf:"SP"},
    {nome_cidade:"Ribeirão Preto",codigo:"35-SP",uf:"SP"},
    {nome_cidade:"Ribeirão Corrente",codigo:"14-SP",uf:"SP"}
  ];

  clientes : Cliente[] = [
    {nome:"Matheus de Oliveira e Souza",codigo:"1",sexo:"Masculino",rg:"99.999.999X",cpf:"999.999.999-99",dt_nascimento:"06/12/2001",salario:"500,00",cidade:this.cidades[0].nome_cidade},
  ];

  displayedColumns : string[] = ['nome','codigo','sexo','rg','cpf','dt_nascimento','salario','cidade','editar','excluir']

  cliente: any = {} //Entidade vazia

  constructor(
    private clienteSrv : ClienteService,
    private actRoute : ActivatedRoute
  ) { }

  ngOnInit(){
  }

  async salvar(form : NgForm) {
    try {
      if(form.valid) {
        if(this.cliente._id) {
          await this.clienteSrv.atualizar(this.cliente)
        }
        else {
          await this.clienteSrv.novo(this.cliente)
        }
      }
    }
    catch(erro) {
      console.log(erro)
    }
  }

}
