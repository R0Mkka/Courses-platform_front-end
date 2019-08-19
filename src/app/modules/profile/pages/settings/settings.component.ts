import { Component, ChangeDetectionStrategy, ViewChild, ElementRef, AfterContentInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'ar-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent implements AfterContentInit {
  @ViewChild('imageContainer', { static: true })
  private imageContainer: ElementRef<HTMLElement>;
  private file: any;

  constructor(private http: HttpClient) { }

  public ngAfterContentInit(): void {
    const img = new Image();
    const srcString = localStorage.getItem('image');

    if (typeof srcString === 'string') {
      img.src = srcString;
      img.classList.add('avatar');
    }

    this.imageContainer.nativeElement.appendChild(img);
  }

  public onChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const reader = new FileReader();

    reader.onload = () => {
      const img = new Image();

      img.src = reader.result as string;
      img.classList.add('avatar');
      img.width = 200;

      localStorage.setItem('image', img.src);

      this.imageContainer.nativeElement.lastChild.remove();
      this.imageContainer.nativeElement.appendChild(img);

      this.file = {
        name: target.files[0].name,
        type: target.files[0].type,
        content: reader.result
      };

      console.log(this.file);
    };

    reader.readAsDataURL(target.files[0]);
  }

  public getImages(): void {
    this.http.get(
      `http://localhost:3000/api/users/kek`,
      { headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }) }
    ).subscribe((value: any[]) => {
      value.forEach(file => {
        this.pushImage(file);
      });
    });
  }

  public saveImage(): void {
    this.http.post(
      `http://localhost:3000/api/users/kek`,
      JSON.stringify(this.file),
      { headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }) }
    ).subscribe(value => console.log(value));
  }

  private pushImage(file): void {
    const img = new Image();

    img.src = file.content as string;
    img.classList.add('avatar');
    img.width = 200;

    this.imageContainer.nativeElement.appendChild(img);
  }
}
