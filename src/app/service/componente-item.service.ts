import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponenteItemResource } from '../resource/componente-item.resource';
import { ComponenteItem } from './../model/componente-item';

@Injectable({
  providedIn: 'root',
})
export class ComponenteItemService {
  constructor(private resource: ComponenteItemResource) { }

  salvarComponenteItem(componenteItem: ComponenteItem): Observable<ComponenteItem> {
    return this.resource.salvarComponenteItem(componenteItem);
  }

  buscarComponenteItem(idComponente: string, filtro: string): Observable<Array<ComponenteItem>> {
    return this.resource.buscarComponenteItem(idComponente, filtro);
  }

  excluirComponenteItem(idItem: string): Observable<any> {
    return this.resource.excluirComponenteItem(idItem);
  }
}
