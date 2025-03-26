import { Component } from '@angular/core';
import { QuizzComponent } from '../../components/quizz/quizz.component';

@Component({
  selector: 'app-home',
  imports: [QuizzComponent],
  templateUrl: './quizzpage.component.html',
  styleUrls: ['./quizzpage.component.css']
})
export class HomeComponent {

}
