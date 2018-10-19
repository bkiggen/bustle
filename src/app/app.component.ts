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
    new Article("11 Easy Halloween Costumes You Can Wear with a Parka", "I thought today we would make a happy little stream that's just running through the woods here. We spend so much of our life looking - but never seeing. At home you have unlimited time. Volunteering your time; it pays you and your whole community fantastic dividends. Little trees and bushes grow however makes them happy.", "https://amp.thisisinsider.com/images/5a5fc07a55ac562f008b46b2-750-563.jpg", "Delice Florice"),
    new Article("Here's the Difference Between Your Zodiac Sign and Reality", "You gotta think like a tree. Let's put some happy trees and bushes back in here. Just take out whatever you don't want. It'll change your entire perspective. Everyone needs a friend. Friends are the most valuable things in the world.", "https://imgix.bustle.com/uploads/image/2018/10/11/c64337dd-9407-4caa-bb70-235d0483960c-fotolia_226315560_subscription_monthly_m.jpg?w=282&h=190&fit=crop&crop=faces&auto=format&q=70&dpr=2", "Jerri DeLonge"),
    new Article("Here Are All The Movies & TV Shows You Need to Watch for the Rest of Your Life", "Let's do it again then, what the heck. It's almost like something out of a fairytale book. Just pretend you are a whisper floating across a mountain. No worries. No cares. Just float and wait for the wind to blow you around. This is truly an almighty mountain.", "https://imgix.bustle.com/uploads/image/2018/10/12/e145d698-1209-43af-8401-63fb88fa8d54-70ebf25310b4a38a308e4ef1d31e5ce24d17ce707310f4ca830b77e09df14dfd.jpeg?w=282&h=190&fit=crop&crop=faces&auto=format&q=70&dpr=2", "Cam Panda"),
    new Article("Let Me Paint You a Picture of my 25 Minutes with Edward the Confessor (Spoiler: He Spilled the Beans)", "This is your world, whatever makes you happy you can put in it. Go crazy. You have freedom here. The only guide is your heart. Be careful. You can always add more - but you can't take it away. Now we'll take the almighty fan brush. With something so strong, a little bit can go a long way. Painting should do one thing. It should put happiness in your heart.", "https://www.thefamouspeople.com/profiles/images/og-edward-the-confessor-37295.jpg", "Devin Efree"), new Article("11 Easy Halloween Costumes You Can Wear with a Parka", "I thought today we would make a happy little stream that's just running through the woods here. We spend so much of our life looking - but never seeing. At home you have unlimited time. Volunteering your time; it pays you and your whole community fantastic dividends. Little trees and bushes grow however makes them happy.", "https://amp.thisisinsider.com/images/5a5fc07a55ac562f008b46b2-750-563.jpg", "Delice Florice"),
    new Article("Here's the Difference Between Your Zodiac Sign and Reality", "You gotta think like a tree. Let's put some happy trees and bushes back in here. Just take out whatever you don't want. It'll change your entire perspective. Everyone needs a friend. Friends are the most valuable things in the world.", "https://imgix.bustle.com/uploads/image/2018/10/11/c64337dd-9407-4caa-bb70-235d0483960c-fotolia_226315560_subscription_monthly_m.jpg?w=282&h=190&fit=crop&crop=faces&auto=format&q=70&dpr=2", "Jerri DeLonge"),
    new Article("Here Are All The Movies & TV Shows You Need to Watch for the Rest of Your Life", "Let's do it again then, what the heck. It's almost like something out of a fairytale book. Just pretend you are a whisper floating across a mountain. No worries. No cares. Just float and wait for the wind to blow you around. This is truly an almighty mountain.", "https://imgix.bustle.com/uploads/image/2018/10/12/e145d698-1209-43af-8401-63fb88fa8d54-70ebf25310b4a38a308e4ef1d31e5ce24d17ce707310f4ca830b77e09df14dfd.jpeg?w=282&h=190&fit=crop&crop=faces&auto=format&q=70&dpr=2", "Cam Panda"),
    new Article("Let Me Paint You a Picture of my 25 Minutes with Edward the Confessor (Spoiler: He Spilled the Beans)", "This is your world, whatever makes you happy you can put in it. Go crazy. You have freedom here. The only guide is your heart. Be careful. You can always add more - but you can't take it away. Now we'll take the almighty fan brush. With something so strong, a little bit can go a long way. Painting should do one thing. It should put happiness in your heart.", "https://www.thefamouspeople.com/profiles/images/og-edward-the-confessor-37295.jpg", "Devin Efree")
  ]


}
