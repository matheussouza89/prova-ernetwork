import { Cliente } from './../../../../../../back-end/models/Cliente';
import { Cidade } from './../../../../../../back-end/models/Cidade';
import { ClienteService } from './../cliente.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


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
    {nome:"Matheus de Oliveira e Souza",codigo:"1",sexo:"Masculino",rg:"99.999.999X",cpf:"999.999.999-99",dt_nascimento:"06/12/2001",salario:"500.00",cidade:this.cidades[0].nome_cidade},
    {nome:"Guilherme Araujo de Oliveira",codigo:"2",sexo:"Masculino",rg:"88.888.888Y",cpf:"888.888.888-88",dt_nascimento:"26/03/2003",salario:"800.00",cidade:this.cidades[1].nome_cidade},
    {nome:"Fausto Silva",codigo:"3",sexo:"Masculino",rg:"77.777.777Z",cpf:"777.777.777-77",dt_nascimento:"13/11/1968",salario:"1 000.00",cidade:this.cidades[0].nome_cidade},
    {nome:"Ana Furtado",codigo:"4",sexo:"Feminino",rg:"66.666.666A",cpf:"666.666.666-66",dt_nascimento:"08/06/1974",salario:"1 500.00",cidade:this.cidades[2].nome_cidade},
    {nome:"Gerônima Lima",codigo:"5",sexo:"Feminino",rg:"55.555.555B",cpf:"555.555.555-55",dt_nascimento:"01/07/1945",salario:"300.00",cidade:this.cidades[0].nome_cidade},
    {nome:"Tadeu Schmidt",codigo:"6",sexo:"Masculino",rg:"44.444.444C",cpf:"444.444.444-44",dt_nascimento:"19/02/1956",salario:"5 700.00",cidade:this.cidades[1].nome_cidade},
    {nome:"Daniel Ribeiro Hielgmann",codigo:"7",sexo:"Masculino",rg:"33.333.333D",cpf:"333.333.333-33",dt_nascimento:"14/09/2007",salario:"9 000.00",cidade:this.cidades[1].nome_cidade},
  ];

  displayedColumns : string[] = ['nome','codigo','sexo','rg','cpf','dt_nascimento','salario','cidade','editar','excluir']

  dataSource = new MatTableDataSource<Cliente>(this.clientes);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  
  cliente: any = {}

  constructor(
    private clienteSrv : ClienteService,
    private actRoute : ActivatedRoute
  ) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

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
