import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [],
})
export class SearchComponent {
  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  constructor(private gifsSErvice: GifsService) {}

  lookup() {
    // console.log(searchTerm);
    // document.querySelector('input').value = '';
    const txtValue = this.txtSearch.nativeElement.value;
    this.gifsSErvice.findGifs(txtValue);
    this.txtSearch.nativeElement.value = '';
  }
}
