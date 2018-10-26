import { Component } from '@angular/core';
import { Article } from './models/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Bustle';
  show: boolean = false;

  toggleMenu() {
    if(this.show === true){
      this.show = false;
    } else {
      this.show = true;
    }
  }

}
