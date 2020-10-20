import { Componente } from 'src/app/model/componente';
import { ComponenteItem } from './../../../model/componente-item';
import { ComponenteItemService } from './../../../service/componente-item.service';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { PoModalAction, PoModalComponent, PoNotificationService, PoTableColumn } from '@po-ui/ng-components';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-novo-item',
  templateUrl: './novo-item.component.html',
  styleUrls: ['./novo-item.component.css']
})
export class NovoItemComponent implements OnInit {

  @Output() contexto: EventEmitter<NovoItemComponent> = new EventEmitter<NovoItemComponent>();

  form: FormGroup;
  componente: ComponenteItem;

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
      this.salvarItem();
    },
    label: 'Confirmar'
  };
  confirmaExcluir: PoModalAction = {
    action: () => {
      this.excluirItem();
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
      this.editarItem();
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

  constructor(private service: ComponenteItemService, private formBuilder: FormBuilder, private poNotification: PoNotificationService) { }

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

  buscarComponenteItem(filtro: string): void {
    this.service.buscarComponenteItem(this.form.get('idComponente').value, filtro).toPromise().then(
      response => {
        this.items = response;
      }, error => {
        this.items = [];
      }
    );
  }

  novoItem(): void {
    this.poModal.open();
  }

  salvarItem(): void {
    let componenteItem = new ComponenteItem();
    componenteItem = this.form.value;
    this.service.salvarComponenteItem(componenteItem).toPromise().then(
      response => {
        this.closeModal();
        this.poNotification.success('Item Salvo com Sucesso!');
        this.buscarComponenteItem('');
      },
      error => {
        this.closeModal();
        this.poNotification.error(error);
      }
    );
  }

  editarItem(): void {
    this.componente = this.form.value;
    this.service.salvarComponenteItem(this.componente).toPromise().then(res => {
      this.poNotification.success('Item Editado com Sucesso!');
      this.modalEditar.close();
      this.buscarComponenteItem('');
      this.limparForm();
    });
  }

  limparForm(): void{
    this.form.get('id').setValue(null);
    this.form.get('codigo').setValue(null);
    this.form.get('descricao').setValue(null);
  }

  excluirItem(): void{
    this.service.excluirComponenteItem(this.componente.id.toString()).subscribe(res => {
      this.closeModalExcluir();
      this.poNotification.success('Item Excluído com Sucesso!');
      this.buscarComponenteItem('');
    });
  }

  perguntaExcluir(com: ComponenteItem): void {
    this.componente = com;
    this.modalExcluir.open();
  }

  perguntaEditar(com: ComponenteItem): void{
    this.componente = com;
    this.modalEditar.open();
    this.form.get('codigo').setValue(this.componente.codigo);
    this.form.get('id').setValue(this.componente.id);
    this.form.get('descricao').setValue(this.componente.descricao);
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
