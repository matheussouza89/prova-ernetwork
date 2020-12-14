import { MatTableDataSource } from '@angular/material/table';
import { Cidade } from './../../../../../../back-end/models/Cidade';
import { CidadeService } from './../cidade.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.scss']
})

export class CidadeComponent implements OnInit {

  cidade : any = {} //Nome da entidade

  cidades : Cidade[] = [
    {nome_cidade:"Franca",codigo:"12-SP",uf:"SP"},
    {nome_cidade:"Ribeirão Preto",codigo:"35-SP",uf:"SP"},
    {nome_cidade:"Ribeirão Corrente",codigo:"14-SP",uf:"SP"},
    {nome_cidade:"Ribeirão Corrente",codigo:"14-SP",uf:"SP"},
    {nome_cidade:"Ribeirão Corrente",codigo:"14-SP",uf:"SP"},
    {nome_cidade:"Ribeirão Corrente",codigo:"14-SP",uf:"SP"},
  ];


  displayedColumns : string[] = ['codigo','cidade','uf','editar','excluir']

  dataSource = new MatTableDataSource<Cidade>(this.cidades);

  constructor(
    private cidadeSrv : CidadeService,
    private actRoute : ActivatedRoute
  ) { }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
  }

  async salvar(form : NgForm) {
    try {
      if(form.valid) {
        if(this.cidade._id) {
          await this.cidadeSrv.atualizar(this.cidade)
        }
        else {
          await this.cidadeSrv.novo(this.cidade)
        }
      }
    }
    catch(erro) {
      console.log(erro)
    }
  }
}

