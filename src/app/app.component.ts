import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .online {
      color: white;
    }
  `]
})
export class AppComponent {
  showParagraph = false;
  clicks = [];
  count = 0;

  toggleParagraph() {
    this.showParagraph = !this.showParagraph;
    this.count++;
    this.clicks.push(this.count);
  }

  getColorBefore5() {
    return this.count >= 5 ? 'blue' : 'transparent';
  }
}
