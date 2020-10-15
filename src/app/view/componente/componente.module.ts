import { NgModule } from '@angular/core';
import { PoButtonModule, PoTableModule } from '@po-ui/ng-components';
import { SharedModule } from '../shared/shared.module';
import { ComponenteRoutingModule } from './componente-routing.module';
import { ComponenteComponent } from './componente.component';

@NgModule({
  declarations: [ComponenteComponent],
  imports: [
    ComponenteRoutingModule,
    SharedModule,
    PoTableModule,
  ]
})
export class ComponenteModule { }
