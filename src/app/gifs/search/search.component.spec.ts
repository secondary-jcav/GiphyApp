import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GifsService } from '../services/gifs.service';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let service: GifsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //it calls find gifs when user enters a value
  // it('calls findGifs when a value is entered', () => {
  //   const query = 'test';
  //   const spy1 = jest.spyOn(service, 'findGifs').mockImplementation(() => null);
  //   component.txtSearch.nativeElement.value = query;
  //   expect(spy1).toHaveBeenCalledTimes(1);
  // });
});
