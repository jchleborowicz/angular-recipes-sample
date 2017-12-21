import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Output() viewChanged = new EventEmitter<string>();

  onSelect(viewId: string) {
    this.viewChanged.emit(viewId);
  }

}
