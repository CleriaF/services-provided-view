import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ClientesService } from '../../../clientes.service';
import { Cliente } from './cliente';

import {
  NbComponentStatus,
  NbGlobalLogicalPosition,
  NbGlobalPhysicalPosition,
  NbGlobalPosition,
  NbToastrService,
  NbToastrConfig,
} from '@nebular/theme';

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./clientes.component.scss'],
  templateUrl: './clientes.component.html',
})
export class FormInputsComponent implements OnInit {

  cliente: Cliente;
  clientes: Cliente[] = [];
  errors: string[];
  index = 1;
  type: NbComponentStatus = 'success';
  title = 'Tudo OK!';
  body = 'Cliente salvo/atualizado com sucesso!'

  constructor(private service: ClientesService, private toastrService: NbToastrService){
    this.cliente = new Cliente();
  }

  salvarCliente(){
    this.service
    .salvar(this.cliente)
    .subscribe(resp => {
      this.showToast();
      this.cliente = resp;
    }, errorResponse => {
      this.errors = errorResponse.error.errors;

      this.type = 'danger';
      this.title = 'Ops :/';

      this.errors.forEach(e => {
        this.body = e;
        this.showToast();
      })
    }); 
  }

  private showToast() {
    const config = {
      status: this.type,
      destroyByClick: true,
      duration: 3000,
      hasIcon: true,
      position: NbGlobalPhysicalPosition.TOP_RIGHT,
      preventDuplicates: false,
    };
    const titleContent = this.title ? ` ${this.title}` : '';

    this.index += 1;
    this.toastrService.show(
      this.body,
      `${titleContent}`,
      config);
  }

  getClientes() {
    console.log('oxe');  
    this.service.getClientes()
      .subscribe(resp => {
        console.log(resp);
      })
  }

  ngOnInit(){
    this.getClientes();
  }

}
