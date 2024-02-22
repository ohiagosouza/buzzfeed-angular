import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomesComponent } from './pages/homes/homes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, HomesComponent],
})
export class AppComponent {
  title = 'buzzfeed-angular';
}
