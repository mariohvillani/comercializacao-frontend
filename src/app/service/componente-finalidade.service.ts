import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponenteFinalidadeResource } from '../resource/componente-finalidade.resource';
import { ComponenteFinalidade } from './../model/componente-finalidade';


@Injectable({
  providedIn: 'root',
})
export class ComponenteFinalidadeService {
  constructor(private resource: ComponenteFinalidadeResource) { }

  salvarComponenteFinalidade(componenteFinalidade: ComponenteFinalidade): Observable<ComponenteFinalidade> {
    return this.resource.salvarComponenteFinalidade(componenteFinalidade);
  }

  buscarComponenteFinalidade(idComponente: string, filtro: string): Observable<Array<ComponenteFinalidade>> {
    return this.resource.buscarComponenteFinalidade(idComponente, filtro);
  }

  excluirComponenteFinalidade(idFinalidade: string): Observable<any> {
    return this.resource.excluirComponenteFinalidade(idFinalidade);
  }
}
