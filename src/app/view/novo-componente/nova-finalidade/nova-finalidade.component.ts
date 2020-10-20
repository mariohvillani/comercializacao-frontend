import { ComponenteFinalidade } from './../../../model/componente-finalidade';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { PoModalAction, PoModalComponent, PoNotificationService, PoTableColumn } from '@po-ui/ng-components';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComponenteFinalidadeService } from './../../../service/componente-finalidade.service';

@Component({
  selector: 'app-nova-finalidade',
  templateUrl: './nova-finalidade.component.html',
  styleUrls: ['./nova-finalidade.component.css']
})
export class NovaFinalidadeComponent implements OnInit {

  @Output() contexto: EventEmitter<NovaFinalidadeComponent> = new EventEmitter<NovaFinalidadeComponent>();

  form: FormGroup;

  public readonly columns: Array<PoTableColumn> = [
    {
      property: 'codigo',
      label: 'Código',
      type: 'string'
    },
    {
      property: 'descricao',
      label: 'Descrição',
      type: 'string'
    },
  ];

  items: Array<any> = [];
  actionsTable = [
    {
      action: this.editar.bind(this),
      label: 'Editar',
      icon: 'po-icon po-icon-edit'
    },
    {
      action: this.excluir.bind(this),
      label: 'Excluir',
      icon: 'po-icon po-icon-delete'
    }
  ];

  close: PoModalAction = {
    action: () => {
      this.closeModal();
    },
    label: 'Cancela',
    danger: true
  };

  confirm: PoModalAction = {
    action: () => {
      this.salvarFinalidade();
    },
    label: 'Confirma'
  };

  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  constructor(private service: ComponenteFinalidadeService,
              private formBuilder: FormBuilder,
              private poNotification: PoNotificationService) {
              }

  ngOnInit(): void {
    this.iniciarForm();
    this.contexto.emit(this);
  }

  iniciarForm(): void {
    this.form = this.formBuilder.group({
      id: [''],
      idComponente: [''],
      codigo: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(30)])],
      descricao: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(50)])],
    });
  }

  setIdComponente(idComponente): void {
    this.form.get('idComponente').setValue(idComponente);
  }

  buscarComponenteFinalidade(filtro: string): void {
    this.service.buscarComponenteFinalidade(this.form.get('idComponente').value, filtro).toPromise().then(
      response => {
        this.items = response;
      }, error => {
        this.items = [];
      }
    );
  }

  novaFinalidade(): void {
    this.poModal.open();
  }

  salvarFinalidade(): void {
    let componenteFinalidade = new ComponenteFinalidade();
    componenteFinalidade = this.form.value;
    this.service.salvarComponenteFinalidade(componenteFinalidade).toPromise().then(
      response => {
        this.closeModal();
        this.poNotification.success('Finalidade Salva com Sucesso!');
        this.buscarComponenteFinalidade('');
      },
      error => {
        this.closeModal();
        this.poNotification.error(error);
      }
    );
  }

  editar(event): void {
  }

  excluir(event): void {
  }

  closeModal(): void {
    this.form.get('id').setValue(null);
    this.form.get('codigo').setValue(null);
    this.form.get('descricao').setValue(null);
    this.poModal.close();
  }

}
