import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsPageComponent } from './gifs-page.component';
import { SearchComponent } from '../search/search.component';
import { ResultsComponent } from '../results/results.component';
import { HttpClientModule } from '@angular/common/http';

describe('GifsPageComponent', () => {
  let component: GifsPageComponent;
  let fixture: ComponentFixture<GifsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GifsPageComponent, SearchComponent, ResultsComponent],
      imports: [HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(GifsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
