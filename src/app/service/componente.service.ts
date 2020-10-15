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

  buscarPorCodigo(codigo: string): Observable<Array<Componente>> {
    return this.resource.buscarPorCodigo(codigo);
  }

  buscarComponentePorId(id: string): Observable<Componente> {
    return this.resource.buscarComponentePorId(id);
  }
}
