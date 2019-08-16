import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private storage: Storage = localStorage;

  public get(key: string): string {
    return this.storage.getItem(key);
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
