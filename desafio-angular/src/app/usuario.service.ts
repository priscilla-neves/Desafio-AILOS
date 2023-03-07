import { Injectable } from '@angular/core';
import { Usuario } from './Usuario';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = { 
  headers: new HttpHeaders({'Content-Type': 'application/json',})
};

const apiUsuario = 'https://621bdb97768a4e10209dfcc0.mockapi.io/api/v1/usuarios';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  constructor(private http: HttpClient) {}

  getUsuario(cpf: string): Observable<Usuario> {
    const url = `${apiUsuario}?cpf=${cpf}`;
  
    const usuario = this.http.get<Usuario[]>(url, httpOptions).pipe(
      map(usuarios => usuarios[0]),
      tap(_ => console.log(`encontrou o Usuario cpf=${cpf}`)),
      catchError(this.handleError<Usuario>(`getUsuario cpf=${cpf}`))
    );
    console.log(usuario);
    return usuario;
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}