import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  viewId = 'recipes';

  onNavigate(viewId: string) {
    this.viewId = viewId;
  }

}
