import {
  ChangeDetectionStrategy,
  Component, signal
} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-brewery',
  templateUrl: './brewery.html',
  imports: [
    NgOptimizedImage
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class BreweryComponent {
  test = signal(false);
}
