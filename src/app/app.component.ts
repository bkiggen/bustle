import { Component } from '@angular/core';
import { Article } from './models/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rustle';


  masterArticleList: Article[] = [
    new Article("11 Easy Halloween Costumes You Can Wear with a Parka", "", "https://amp.thisisinsider.com/images/5a5fc07a55ac562f008b46b2-750-563.jpg", "Delice Florice"),
    new Article("Here's the Difference Between Your Zodiac Sign and Reality", "", "https://imgix.bustle.com/uploads/image/2018/10/11/c64337dd-9407-4caa-bb70-235d0483960c-fotolia_226315560_subscription_monthly_m.jpg?w=282&h=190&fit=crop&crop=faces&auto=format&q=70&dpr=2", "Jerri DeLonge"),
    new Article("Here Are All The Movies & TV Shows You Need to Watch for the Rest of Your Life", "", "https://imgix.bustle.com/uploads/image/2018/10/12/e145d698-1209-43af-8401-63fb88fa8d54-70ebf25310b4a38a308e4ef1d31e5ce24d17ce707310f4ca830b77e09df14dfd.jpeg?w=282&h=190&fit=crop&crop=faces&auto=format&q=70&dpr=2", "Cam Panda"),
    new Article("Let Me Paint You a Picture of my 25 Minutes with Edward the Confessor (Spoiler: He Spilled the Beans)", "", "http://www.mercedesrochelle.com/wordpress/wp-content/uploads/2014/12/edward_Confessor.jpg", "Devin Efree")
  ]


}
