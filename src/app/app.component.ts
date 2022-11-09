import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  readonly heroImage: string = 'https://i.postimg.cc/4dzWksCv/pizza-hero.jpg';
  readonly images: string[] = [
    'https://i.postimg.cc/gc7WkH1x/pizza-1.jpg',
    'https://i.postimg.cc/P5WsysJD/pizza-2.jpg',
    'https://i.postimg.cc/rwnbQVcK/pizza-3.jpg',
    'https://i.postimg.cc/YSvPP5q8/pizza-4.jpg',
    'https://i.postimg.cc/XqbDpXKD/pizza-5.jpg',
    'https://i.postimg.cc/XvtP6srW/pizza-6.jpg',
    'https://i.postimg.cc/cL42RKpp/pizza-7.jpg',
    'https://i.postimg.cc/0QmBk7Sw/pizza-8.jpg',
    'https://i.postimg.cc/SRf18qDQ/pizza-9.jpg',
    'https://i.postimg.cc/7P3WjMwv/pizza-10.jpg',
    'https://i.postimg.cc/wTFbjq10/pizza-11.jpg',
    'https://i.postimg.cc/Gm2gBWYr/pizza-12.jpg',
    'https://i.postimg.cc/P5R31SzD/pizza-13.jpg',
    'https://i.postimg.cc/KY39ftJH/pizza-14.jpg',
  ];

}
