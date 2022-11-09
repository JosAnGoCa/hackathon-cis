import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from './global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {
  REQEST_SERVER: string = '';

  constructor(private httpClient: HttpClient) {
    this.REQEST_SERVER = Global.url;
  }

  consultarCarreras(escuela: string): Observable<any> {
    return this.httpClient.get(
      `${this.REQEST_SERVER}/${escuela}/1`
    );
  }
}
