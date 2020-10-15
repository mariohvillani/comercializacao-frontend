import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PoBreadcrumb, PoModalComponent, PoPageAction } from '@po-ui/ng-components';
import { ComponenteService } from './../../service/componente.service';
import { ComponenteTableColumns } from './componente-table-columns';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.css']
})
export class ComponenteComponent extends ComponenteTableColumns implements OnInit, AfterViewInit {

  constructor(private router: Router, private service: ComponenteService) {
    super();
  }

  extraInformation: any;

  items: Array<any> = [];
  actionsTable = [{
    action: this.editar.bind(this),
    label: 'Editar',
    icon: 'po-icon po-icon-edit'
  }];

  showMoreDisabled = false;
  title: any;
  isLoading = false;

  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Componente' }]
  };

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.buscarComponentesPorCodigo('');
  }

  buscarComponentesPorCodigo(codigo: string): void {
    this.service.buscarPorCodigo(codigo).toPromise().then(
      response => {
        this.items = response;
      },
      error => {
        this.items = [];
      }
    );
  }

  novoComponente(): void {
    this.router.navigateByUrl('/novo-componente');
  }

  editar(event): void {
    this.router.navigateByUrl('/novo-componente/' + event?.id);
  }
}
