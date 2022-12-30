import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';
import secrets from 'secrets';
@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _history: string[] = [];
  private apiKey: string = secrets.api_key;
  public results: Gif[] = [];
  private service_url: string = 'https://api.giphy.com/v1/gifs';

  get historical() {
    return [...this._history];
  }

  constructor(private http: HttpClient) {
    if (localStorage.getItem('history')) {
      this._history = JSON.parse(localStorage.getItem('history')!);
    }

    if (localStorage.getItem('results')) {
      this.results = JSON.parse(localStorage.getItem('results')!);
    }
  }

  findGifs(query: string) {
    query = query.trim().toLowerCase();

    if (query.trim().length === 0) {
      return;
    }
    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0, 10);

      localStorage.setItem('history', JSON.stringify(this._history));
    }
    console.log(this._history);
    // fetch(
    //   'https://api.giphy.com/v1/gifs/search?api_key=lhLPUqznYzjQ47TiG6tOXuYhpGGCyjMf&q=dragon'
    // ).then((res) => {
    //   res.json().then((data) => {
    //     console.log(data);
    //   });
    // });

    //   const resp = await fetch(
    //     'https://api.giphy.com/v1/gifs/search?api_key=lhLPUqznYzjQ47TiG6tOXuYhpGGCyjMf&q=dragon'
    //   );

    //   const data = await resp.json();

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);

    this.http
      .get<SearchGifsResponse>(`${this.service_url}/search`, { params: params })
      .subscribe((resp) => {
        console.log(resp.data);
        this.results = resp.data;
        if (this.results) {
          localStorage.setItem('results', JSON.stringify(this.results));
        }
      });
  }
}
