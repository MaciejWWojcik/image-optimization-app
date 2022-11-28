import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  readonly heroImage: string = 'assets/pizza-hero.jpg';
  readonly images: string[] = [
    'assets/pizza-1.jpg',
    'assets/pizza-2.jpg',
    'assets/pizza-3.jpg',
    'assets/pizza-4.jpg',
    'assets/pizza-5.jpg',
    'assets/pizza-6.jpg',
    'assets/pizza-7.jpg',
    'assets/pizza-8.jpg',
    'assets/pizza-9.jpg',
    'assets/pizza-10.jpg',
    'assets/pizza-11.jpg',
    'assets/pizza-12.jpg',
    'assets/pizza-13.jpg',
    'assets/pizza-14.jpg',
  ];

}
