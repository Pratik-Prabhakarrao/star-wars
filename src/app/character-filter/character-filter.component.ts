import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CallAPIService } from '../call-api.service';

@Component({
  selector: 'app-character-filter',
  templateUrl: './character-filter.component.html',
  styleUrls: ['./character-filter.component.css']
})
export class CharacterFilterComponent implements OnInit {
  @Output() filterChange = new EventEmitter<any>();
  movies: any[] = [];
  species: any[] = [];
  filterCriteria: any = {};

  constructor(private callApiService: CallAPIService) {}

  ngOnInit(): void {
    this.callApiService.getMovies().subscribe((data: any) => {
      this.movies = data.results;
    });
    this.callApiService.getSpecies().subscribe((data: any) => {
      this.species = data.results;
    });
  }

  applyFilter(): void {
    this.filterChange.emit(this.filterCriteria);
  }
}
