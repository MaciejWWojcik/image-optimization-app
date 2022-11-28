import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  readonly heroImage: string = 'https://image-optimization-app.vercel.app/assets/pizza-hero.jpg';
  readonly images: string[] = [
    'https://image-optimization-app.vercel.app/assets/pizza-1.jpg',
    'https://image-optimization-app.vercel.app/assets/pizza-2.jpg',
    'https://image-optimization-app.vercel.app/assets/pizza-3.jpg',
    'https://image-optimization-app.vercel.app/assets/pizza-4.jpg',
    'https://image-optimization-app.vercel.app/assets/pizza-5.jpg',
    'https://image-optimization-app.vercel.app/assets/pizza-6.jpg',
    'https://image-optimization-app.vercel.app/assets/pizza-7.jpg',
    'https://image-optimization-app.vercel.app/assets/pizza-8.jpg',
    'https://image-optimization-app.vercel.app/assets/pizza-9.jpg',
    'https://image-optimization-app.vercel.app/assets/pizza-10.jpg',
    'https://image-optimization-app.vercel.app/assets/pizza-11.jpg',
    'https://image-optimization-app.vercel.app/assets/pizza-12.jpg',
    'https://image-optimization-app.vercel.app/assets/pizza-13.jpg',
    'https://image-optimization-app.vercel.app/assets/pizza-14.jpg',
  ];
}
