import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  readonly heroImage: string = 'pizza-hero.jpg';
  readonly images: string[] = [
    'pizza-1.jpg',
    'pizza-2.jpg',
    'pizza-3.jpg',
    'pizza-4.jpg',
    'pizza-5.jpg',
    'pizza-6.jpg',
    'pizza-7.jpg',
    'pizza-8.jpg',
    'pizza-9.jpg',
    'pizza-10.jpg',
    'pizza-11.jpg',
    'pizza-12.jpg',
    'pizza-13.jpg',
    'pizza-14.jpg',
  ];

}
