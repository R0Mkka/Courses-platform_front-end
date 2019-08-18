import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ar-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public currentColorPalette = 'color-palette-1';
}
