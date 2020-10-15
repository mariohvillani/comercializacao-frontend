import { Constantes } from './../util/constantes';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from '../model/componente';

@Injectable({
  providedIn: 'root',
})
export class ComponenteResource {
  constructor(private http: HttpClient) { }

  salvarComponente(componente: Componente): Observable<Componente> {
    return this.http.post<Componente>(Constantes.apiUrl + 'componente', componente);
  }

  buscarPorCodigo(codigo: string): Observable<Array<Componente>> {
    const params = new HttpParams().set('codigo', codigo);
    return this.http.get<Array<Componente>>(Constantes.apiUrl + 'componente/buscarPorCodigo', { params });
  }

  buscarComponentePorId(id: string): Observable<Componente> {
    const params = new HttpParams().set('id', id);
    return this.http.get<Componente>(Constantes.apiUrl + 'componente/buscarComponentePorId', { params });
  }
}
