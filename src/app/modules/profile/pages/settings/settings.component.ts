import { Component, ChangeDetectionStrategy, ViewChild, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'ar-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent implements AfterContentInit {
  @ViewChild('imageContainer', { static: true })
  private imageContainer: ElementRef<HTMLElement>;

  constructor() { }

  public ngAfterContentInit(): void {
    const img = new Image();
    const srcString = localStorage.getItem('image');

    if (typeof srcString === 'string') {
      img.src = srcString;
    }

    this.imageContainer.nativeElement.appendChild(img);
  }

  public onChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const reader = new FileReader();

    reader.onload = () => {
      const img = new Image();

      img.src = reader.result as string;
      img.width = 200;
      img.height = 200;

      localStorage.setItem('image', img.src);

      this.imageContainer.nativeElement.innerHTML = '';
      this.imageContainer.nativeElement.appendChild(img);
    };

    reader.readAsDataURL(target.files[0]);
  }
}
