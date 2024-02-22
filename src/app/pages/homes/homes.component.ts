import { Component } from '@angular/core';
import { QuizzComponent } from '../../component/quizz/quizz.component';

@Component({
  selector: 'app-homes',
  standalone: true,
  templateUrl: './homes.component.html',
  styleUrl: './homes.component.css',
  imports: [QuizzComponent],
})
export class HomesComponent {}
