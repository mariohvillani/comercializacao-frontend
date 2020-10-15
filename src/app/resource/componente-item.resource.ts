import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponenteItem } from './../model/componente-item';
import { Constantes } from './../util/constantes';

@Injectable({
  providedIn: 'root',
})
export class ComponenteItemResource {
  constructor(private http: HttpClient) { }

  salvarComponenteItem(componenteItem: ComponenteItem): Observable<ComponenteItem> {
    return this.http.post<ComponenteItem>(Constantes.apiUrl + 'componente/item', componenteItem);
  }

  buscarComponenteItem(idComponente: string, filtro: string): Observable<Array<ComponenteItem>> {
    const params = new HttpParams().set('idComponente', idComponente).set('parametro', filtro);
    return this.http.get<Array<ComponenteItem>>(Constantes.apiUrl + 'componente/item/buscarComponenteItem', { params });
  }

  excluirComponenteItem(idItem: string): Observable<any> {
    const params = new HttpParams().set('idItem', idItem);
    return this.http.delete<any>(Constantes.apiUrl + 'componente/item/excluirComponenteItem', { params });
  }
}
