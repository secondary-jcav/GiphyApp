import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _history: string[] = [];

  get historical() {
    return [...this._history];
  }

  findGifs(query: string) {
    query = query.trim().toLowerCase();

    if (query.trim().length === 0) {
      return;
    }
    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0, 10);
    }
    console.log(this._history);
  }
}
