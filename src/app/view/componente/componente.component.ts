import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PoBreadcrumb, PoModalComponent, PoPageAction, PoTableColumnSort } from '@po-ui/ng-components';
import { ComponenteService } from './../../service/componente.service';
import { ComponenteTableColumns } from './componente-table-columns';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.css']
})
export class ComponenteComponent extends ComponenteTableColumns implements OnInit, AfterViewInit {

  codigoFiltro = '';

  public readonly actions: Array<PoPageAction> = [
    { label: 'Novo', action: this.novoComponente.bind(this), icon: 'po-icon po-icon-plus' }
  ];

  constructor(private router: Router, private service: ComponenteService) {
    super();
  }

  showMoreDisabled = false;

  pagina = 0;
  tamanho = 2;
  totalPages = null;

  extraInformation: any;

  items: Array<any> = [];
  actionsTable = [{
    action: this.editar.bind(this),
    label: 'Editar',
    icon: 'po-icon po-icon-edit'
  }];

  title: any;
  isLoading = false;

  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Componente' }]
  };

  ngOnInit(): void {
    this.pagina = 0;
  }

  ngAfterViewInit(): void {
    this.buscarComponentesPorCodigo('');
  }

  filtrarPorCodigo(codigo: string): void {
    this.pagina = 0;
    this.codigoFiltro = codigo;
    this.items = [];
    this.buscarComponentesPorCodigo(codigo);
  }

  limparFiltro(event): void {
    this.filtrarPorCodigo('');
  }

  buscarComponentesPorCodigo(codigo: string): void {
    this.service.paginar(codigo, this.pagina.toString(), this.tamanho.toString()).toPromise().then(
      response => {
        this.isLoading = false;
        this.items = this.items.concat(response?.content);
        this.totalPages = response?.totalPages - 1;
      },
      error => {
        this.items = [];
        this.pagina = 0;
      }
    );
  }

  novoComponente(): void {
    this.router.navigateByUrl('/novo-componente');
  }

  editar(event): void {
    this.router.navigateByUrl('/novo-componente/' + event?.id);
  }

  showMore(sort: PoTableColumnSort): void {

    if (!this.totalPages || (this.totalPages >= (this.pagina + 1))) {
      this.pagina++;
      this.isLoading = true;
      this.buscarComponentesPorCodigo(this.codigoFiltro);
    }

  }
}
