import { NgModule } from '@angular/core';
import { PoButtonModule, PoTableModule } from '@po-ui/ng-components';
import { SharedModule } from '../shared/shared.module';
import { ComponenteRoutingModule } from './componente-routing.module';
import { ComponenteComponent } from './componente.component';
import { PoPageDynamicSearchModule } from '@po-ui/ng-templates';

@NgModule({
  declarations: [ComponenteComponent],
  imports: [
    ComponenteRoutingModule,
    SharedModule,
    PoTableModule,
    PoPageDynamicSearchModule
  ]
})
export class ComponenteModule { }
