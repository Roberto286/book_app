import { Component, Input } from '@angular/core';

type Book = {
  id: string;
  title: string;
  author: string;
  genre: string;
  price: string;
  cover?: string;
};

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() data: Book = {
    id: '',
    title: '',
    author: '',
    genre: '',
    price: '',
  };

  constructor() {}
}
