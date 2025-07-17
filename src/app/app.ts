import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    Hey<br/><br/><br/><br/><br/><br/>

    <div style="display: flex; gap: 10px">
      <!--<img ngSrc="non-existent-image.png" width="500" height="500" style="border: 1px solid black" />-->
      <!--<img src="non-existent-image.png" width="500" height="500" style="border: 1px solid black" />-->

      <img
        [attr.data-test]="test()"
        (click)="test.set(true)"
        src="https://images.dog.ceo/breeds/papillon/n02086910_2994.jpg" width="500" height="500" style="border: 1px solid black" />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  test = signal(false);
}
