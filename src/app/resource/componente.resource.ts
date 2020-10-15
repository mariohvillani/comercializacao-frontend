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

  paginar(codigo: string, pagina: string, tamanho: string): Observable<any> {
    const params = new HttpParams().set('codigo', codigo).set('page', pagina).set('size', tamanho)
      .set('sort', 'codigo,asc');
    return this.http.get<any>(Constantes.apiUrl + 'componente', { params });
  }

  buscarComponentePorId(id: string): Observable<Componente> {
    const params = new HttpParams().set('id', id);
    return this.http.get<Componente>(Constantes.apiUrl + 'componente/buscarPorId', { params });
  }
}
