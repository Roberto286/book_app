import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FetchBooksService {
  constructor(private _http: HttpClient) {}

  getBooks() {
    return this._http.get('http://localhost:7923/books');
  }
}
