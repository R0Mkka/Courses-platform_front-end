import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ar-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesComponent {
  constructor() { }
}
