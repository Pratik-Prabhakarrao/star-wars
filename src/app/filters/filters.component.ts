import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CallAPIService } from '../call-api.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit{
  @Output() filterChange = new EventEmitter<any>();
  movies: any[] = [];
  species: any[] = [];
  vehicles: any[] = [];
  starships: any[]= [];
  filterCriteria: any = {};

  constructor(private callApiService: CallAPIService) {}

  ngOnInit(): void {
    this.callApiService.getMovies().subscribe((data: any) => {
      this.movies = data.results;
    });
    this.callApiService.getSpecies().subscribe((data: any) => {
      this.species = data.results;
    });
    this.callApiService.getVehicle().subscribe((data: any) => {
      this.vehicles = data.results;
    });
    this.callApiService.getStarship().subscribe((data: any) => {
      this.starships = data.starships;
    });
  }

  applyFilter(): void {
    this.filterChange.emit(this.filterCriteria);
  }
}
