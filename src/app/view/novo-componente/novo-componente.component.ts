import { NovaFinalidadeComponent } from './nova-finalidade/nova-finalidade.component';
import { NovoItemComponent } from './novo-item/novo-item.component';
import { ComponenteService } from './../../service/componente.service';
import { SimNao } from './../../enums/sim-nao.enum';
import { UnidadeMedidaToSelectOption } from './../../enums/unidade-medida.enum';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PoBreadcrumb, PoNotificationService, PoPageAction, PoSelectOption, PoTabComponent, PoTabsComponent } from '@po-ui/ng-components';
import { AplicacaoToSelectOption } from 'src/app/enums/aplicacao.enum';
import { MoedaToSelectOption } from 'src/app/enums/moeda.enum';
import { TipoToSelectOption } from 'src/app/enums/tipo.enum';
import { Componente } from 'src/app/model/componente';

@Component({
  selector: 'app-novo-componente',
  templateUrl: './novo-componente.component.html',
  styleUrls: ['./novo-componente.component.css']
})
export class NovoComponenteComponent implements OnInit, AfterViewInit {

  @ViewChild('tabItem', { static: false }) tabItem: PoTabComponent;
  contextoNovoItem: NovoItemComponent;
  contextoNovaFinalidade: NovaFinalidadeComponent;

  form: FormGroup;

  unidadesMedida: Array<PoSelectOption> = UnidadeMedidaToSelectOption();
  moedas: Array<PoSelectOption> = MoedaToSelectOption();
  tipos: Array<PoSelectOption> = TipoToSelectOption();
  aplicacoes: Array<PoSelectOption> = AplicacaoToSelectOption();

  public readonly actions: Array<PoPageAction> = [
    { label: 'Salvar', action: this.salvar.bind(this), icon: 'po-icon po-icon-ok' },
    { label: 'Cancelar', action: this.voltarParaComponentes.bind(this) }
  ];

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Componente', link: '/componente' },
    { label: 'Cadastro - Componentes de preço' }]
  };

  constructor(private router: Router, private formBuilder: FormBuilder,
              private service: ComponenteService,
              public poNotification: PoNotificationService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.iniciarForm();

    this.route.paramMap.subscribe(params => {
      if (params && params.get('id')) {
        this.form.get('id').setValue(params.get('id'));
        this.buscarComponentePorId(params.get('id'));
      }
    });
  }

  ngAfterViewInit(): void {
    this.tabItemChange();
  }

  iniciarForm(): void {
    this.form = this.formBuilder.group({
      id: [''],
      codigo: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(30)])],
      descricao: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(50)])],
      unidadeMedida: ['', Validators.required],
      moeda: ['', Validators.required],
      tipo: ['', Validators.required],
      tabela: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(10)])],
      aplicacao: ['', Validators.required],
      ativo: [''],
      hedge: [''],
      codigoExterno: ['']
    });
  }

  voltarParaComponentes(): void {
    this.router.navigateByUrl('/componente');
  }

  changeUnidadeMedida(event): void {
    this.form.get('unidadeMedida').setValue(event);
  }

  changeMoeda(event): void {
    this.form.get('moeda').setValue(event);
  }

  changeTipo(event): void {
    this.form.get('tipo').setValue(event);
  }

  changeAplicacao(event): void {
    this.form.get('aplicacao').setValue(event);
  }

  salvar(): void {
    this.form.valid ? this.salvarComponente() : this.mensagemFormInvalido();
  }

  private mensagemFormInvalido(): void {
    this.poNotification.warning('Existem campos inválidos ou campos obrigatórios que não foram preenchidos!');
  }

  private salvarComponente(): void {
    this.service.salvarComponente(this.preencheObjeto()).toPromise().then(
      response => {
        this.form.get('id').setValue(response.id);
        this.poNotification.success('Componente Salvo com Sucesso!');
      }
    );
  }

  private preencheObjeto(): Componente {
    let componente = new Componente();
    componente = this.form.value;
    componente.ativo = this.form.get('ativo').value ? SimNao.Sim : SimNao.Não;
    componente.hedge = this.form.get('hedge').value ? SimNao.Sim : SimNao.Não;
    return componente;
  }

  tabItemChange(): void {
    this.contextoNovoItem.setIdComponente(this.form.get('id').value);
    this.contextoNovoItem.buscarComponenteItem('');
  }

  tabComponentesChange(): void {

  }

  tabTipoFreteChange(): void {

  }

  tabFinalidadeChange(): void {
    this.contextoNovaFinalidade.setIdComponente(this.form.get('id').value);
    this.contextoNovaFinalidade.buscarComponenteFinalidade('');
  }

  getContextoNovoItem(event): void {
    this.contextoNovoItem = event;
  }

  getContextoNovaFinalidade(event): void {
    this.contextoNovaFinalidade = event;
  }

  buscarComponentePorId(id): void {
    this.service.buscarComponentePorId(id).toPromise().then(
      response => {
        this.form.patchValue(response);
      },
      error => {
        this.poNotification.error(error);
        this.form.reset();
      }
    );
  }
}
