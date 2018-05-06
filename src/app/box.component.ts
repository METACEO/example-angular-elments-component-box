import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'example-angular-elements-component-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class BoxComponent {
  public timeStamp: number = (new Date).getTime();
}
