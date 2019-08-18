import { Injectable } from '@angular/core';

export enum LocalStorageItems {
  Token = 'MeanToken',
  User = 'CurrentUser'
}

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private storage: Storage = localStorage;

  public get(key: string): string {
    return this.storage.getItem(key);
  }

  public getAsObject<T>(key: string): T {
    return JSON.parse(this.get(key)) as T;
  }

  public set(key: string, value: string): void {
    this.storage.setItem(key, value);
  }

  public remove(key: string): void {
    this.storage.removeItem(key);
  }

  public has(key: string): boolean {
    return !!this.get(key);
  }

  public clear(): void {
    this.storage.clear();
  }
}
