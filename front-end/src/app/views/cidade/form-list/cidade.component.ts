import { CidadeService } from './../cidade.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.scss']
})

export class CidadeComponent implements OnInit {

  cidade : any = {} //Nome da entidade


  displayedColumns : string[] = ['codigo','cidade']

  constructor(
    private cidadeSrv : CidadeService,
    private actRoute : ActivatedRoute
  ) { }

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

