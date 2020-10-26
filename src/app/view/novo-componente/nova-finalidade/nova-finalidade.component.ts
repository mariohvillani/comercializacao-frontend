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
  componenteFinalidade: ComponenteFinalidade;

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
      action: this.perguntaEditar.bind(this),
      label: 'Editar',
      icon: 'po-icon po-icon-edit'
    },
    {
      action: this.perguntaExcluir.bind(this),
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
    label: 'Confirmar'
  };
  confirmaExcluir: PoModalAction = {
    action: () => {
      this.excluirFinalidade();
    },
    label: 'Excluir'
  };

  cancelaExcluir: PoModalAction = {
    action: () => {
      this.closeModalExcluir();
    },
    label: 'Cancela',
    danger: true
  };

  confirmaEditar: PoModalAction = {
    action: () => {
      this.editarFinalidade();
    },
    label: 'Editar'
  };
  cancelaEditar: PoModalAction = {
    action: () => {
      this.closeModalEditar();
    },
    label: 'Cancela',
    danger: true
  };

  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;
  @ViewChild('modalExcluir', { static: true }) modalExcluir: PoModalComponent;
  @ViewChild('modalEditar', { static: true }) modalEditar: PoModalComponent;

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

  editarFinalidade(): void {
    this.componenteFinalidade = this.form.value;
    this.service.salvarComponenteFinalidade(this.componenteFinalidade).toPromise().then(res => {
      this.poNotification.success('Item Editado com Sucesso!');
      this.modalEditar.close();
      this.buscarComponenteFinalidade('');
      this.limparForm();
    });
  }

  perguntaExcluir(com: ComponenteFinalidade): void {
    this.componenteFinalidade = com;
    this.modalExcluir.open();
  }

  excluirFinalidade(): void{
    this.service.excluirComponenteFinalidade(this.componenteFinalidade.id.toString()).subscribe(res => {
      this.closeModalExcluir();
      this.poNotification.success('Item Excluído com Sucesso!');
      this.buscarComponenteFinalidade('');
    });
  }

  perguntaEditar(com: ComponenteFinalidade): void{
    this.componenteFinalidade = com;
    this.modalEditar.open();
    this.form.get('codigo').setValue(this.componenteFinalidade.codigo);
    this.form.get('id').setValue(this.componenteFinalidade.id);
    this.form.get('descricao').setValue(this.componenteFinalidade.descricao);
  }


  editarItem(): void {
    this.componenteFinalidade = this.form.value;
    this.service.salvarComponenteFinalidade(this.componenteFinalidade).toPromise().then(res => {
      this.poNotification.success('Item Editado com Sucesso!');
      this.modalEditar.close();
      this.buscarComponenteFinalidade('');
      this.limparForm();
    });
  }

  limparForm(): void{
    this.form.get('id').setValue(null);
    this.form.get('codigo').setValue(null);
    this.form.get('descricao').setValue(null);
  }

  excluir(event): void {
  }

  closeModal(): void {
    this.form.get('id').setValue(null);
    this.form.get('codigo').setValue(null);
    this.form.get('descricao').setValue(null);
    this.poModal.close();
  }

  closeModalExcluir(): void {
    this.modalExcluir.close();
  }
  closeModalEditar(): void {
    this.modalEditar.close();
    this.limparForm();
  }

}
