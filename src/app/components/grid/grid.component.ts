import { Component, OnInit } from '@angular/core';
import { FetchBooksService } from 'src/app/services/fetchBooks/fetch-books.service';

type Book = {
  id: string;
  title: string;
  author: string;
  genre: string;
  price: string;
  cover?: string;
};

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  books: Book[] = [];

  constructor(private _bookService: FetchBooksService) {}

  ngOnInit() {
    this._bookService
      .getBooks()
      .subscribe((res) => (this.books = res as Book[]));
  }
}
