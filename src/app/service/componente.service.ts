import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from '../model/componente';
import { ComponenteResource } from './../resource/componente.resource';

@Injectable({
  providedIn: 'root',
})
export class ComponenteService {
  constructor(private resource: ComponenteResource) { }

  salvarComponente(componente: Componente): Observable<Componente> {
    return this.resource.salvarComponente(componente);
  }

  paginar(codigo: string, pagina: string, tamanho: string): Observable<any> {
    return this.resource.paginar(codigo, pagina, tamanho);
  }

  buscarComponentePorId(id: string): Observable<Componente> {
    return this.resource.buscarComponentePorId(id);
  }
}
