import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponenteFinalidade } from '../model/componente-finalidade';
import { Constantes } from '../util/constantes';

@Injectable({
  providedIn: 'root',
})
export class ComponenteFinalidadeResource {
  constructor(private http: HttpClient) { }

  salvarComponenteFinalidade(componenteFinalidade: ComponenteFinalidade): Observable<ComponenteFinalidade> {
    return this.http.post<ComponenteFinalidade>(Constantes.apiUrl + 'componente/finalidade', componenteFinalidade);
  }

  buscarComponenteFinalidade(idComponente: string, filtro: string): Observable<Array<ComponenteFinalidade>> {
    const params = new HttpParams().set('idComponente', idComponente).set('parametro', filtro);
    return this.http.get<Array<ComponenteFinalidade>>(Constantes.apiUrl + 'componente/finalidade/buscarComponenteFinalidade', { params });
  }

  excluirComponenteFinalidade(idFinalidade: string): Observable<any> {
    const params = new HttpParams().set('idFinalidade', idFinalidade);
    return this.http.delete<any>(Constantes.apiUrl + 'componente/finalidade/excluirComponenteFinalidade', { params });
  }
}
