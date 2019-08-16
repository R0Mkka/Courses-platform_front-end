import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface IHttpOptions {
  headers: HttpHeaders;
}

const defaultHttpOptions: IHttpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }

  public get<T>(requestedUrl: string, httpOptions?: IHttpOptions): Observable<T> {
    if (!!httpOptions) {
      httpOptions.headers.append('Content-Type', 'application/json');
    }

    return this.http.get<T>(requestedUrl, !!httpOptions ? httpOptions : defaultHttpOptions);
  }

  public post<I, O>(requestedUrl: string, data: I, httpOptions?: IHttpOptions): Observable<O> {
    if (!!httpOptions) {
      httpOptions.headers.append('Content-Type', 'application/json');
    }

    return this.http.post<O>(requestedUrl, JSON.stringify(data), !!httpOptions ? httpOptions : defaultHttpOptions);
  }
}
