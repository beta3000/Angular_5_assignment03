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

  toggleParagraph(event: Event) {
    this.showParagraph = !this.showParagraph;
    this.clicks.push(event.timeStamp);
    this.count++;
  }

  getColorBefore5() {
    return this.count >= 5 ? 'blue' : 'red';
  }
}
