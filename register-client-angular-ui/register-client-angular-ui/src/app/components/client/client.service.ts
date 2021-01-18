import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Client } from './client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseUrl = 'http://localhost:8080/clients';

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient) { }


  create(client: Client): Observable<Client> {
    return this.http.post<Client>(this.baseUrl, client).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  read(page, size): Observable<Client[]> {
    const params = new HttpParams()
    .set('page', page)
    .set('linesPerPage', size)
    return this.http.get<Client[]>(`${this.baseUrl}?${params.toString()}`).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  readById(id: string): Observable<Client> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Client>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );;
  }

  update(client: Client): Observable<Client> {
    const url = `${this.baseUrl}/${client.id}`;
    return this.http.put<Client>(url, client).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );;
  }

  delete(id: string): Observable<Client> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Client>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );;
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage(e.error.message, true);
    console.log(e)
    return EMPTY
  }
}
