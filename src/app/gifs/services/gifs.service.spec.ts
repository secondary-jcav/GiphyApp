import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { GifsService } from './gifs.service';
import secrets from 'secrets';

describe('GifsService', () => {
  let service: GifsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GifsService],
    });
    service = TestBed.inject(GifsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    localStorage.clear();
    jest.resetAllMocks();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //it should increase the historical array

  it('should add to the _history array', () => {
    const query = 'test_query';
    expect(service.historical.length).toBe(0);
    service.findGifs(query);
    expect(service.historical.length).toBe(1);
    expect(service.historical).toContain(query);
  });

  //it should increase the results array

  //it should launch a GET
  it('results should conform to interface', () => {
    const query = 'test_query';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${secrets.api_key}&limit=10&q=${query}`;
    service.findGifs(query);

    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('GET');
  });
});
