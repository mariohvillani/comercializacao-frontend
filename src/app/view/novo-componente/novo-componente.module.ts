import { NovaFinalidadeComponent } from './nova-finalidade/nova-finalidade.component';
import { NovoTipoFreteComponent } from './novo-tipo-frete/novo-tipo-frete.component';
import { NovoItemComponent } from './novo-item/novo-item.component';
import { NovoComponenteComponent } from './novo-componente.component';
import { NgModule } from '@angular/core';
import { PoButtonModule, PoModalModule, PoTableModule, PoTabsModule } from '@po-ui/ng-components';
import { SharedModule } from '../shared/shared.module';
import { NovoComponenteRoutingModule } from './novo-componente.routing.module';
import { NovoComponenteAbaComponent } from './novo-componente-aba/novo-componente-aba.component';

@NgModule({
  declarations: [NovoComponenteComponent,
    NovoItemComponent,
    NovoComponenteAbaComponent,
    NovoTipoFreteComponent,
    NovaFinalidadeComponent,
  ],
  imports: [
    NovoComponenteRoutingModule,
    SharedModule,
    PoTableModule,
    PoTabsModule,
    PoModalModule
  ]
})
export class NovoComponenteModule { }
