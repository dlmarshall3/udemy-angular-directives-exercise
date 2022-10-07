import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage: number = 0;
  images = [
    {
      title: 'At the beach',
      url: 'assets/beach.png'
    },
    {
      title: 'At the farm',
      url: 'assets/farm.png'
    },
    {
      title: 'At the ball game',
      url: 'assets/ballgame.png'
    },
    {
      title: 'At the concert',
      url: 'assets/stageshow.jpg'
    }
  ];

  checkWindowIndex(index: number){
    return Math.abs(this.currentPage - index) < 5;
  }

}
