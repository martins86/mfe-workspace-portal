import { Component } from '@angular/core'

@Component({
  selector: 'mfe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Dashboard';
  currentYear = new Date().getFullYear();
}
