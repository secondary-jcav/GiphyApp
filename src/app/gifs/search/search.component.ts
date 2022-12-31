import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [],
})

/**
 * Handles the search bar on the main page
 * @constructor - imports GifsService and passes the string query
 */
export class SearchComponent {
  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  constructor(private gifsSErvice: GifsService) {}

  lookup() {
    const txtValue = this.txtSearch.nativeElement.value;
    this.gifsSErvice.findGifs(txtValue);
    this.txtSearch.nativeElement.value = '';
  }
}
