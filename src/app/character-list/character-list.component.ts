import { Component, OnInit } from '@angular/core';
import { CallAPIService } from '../call-api.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit{
  chatacters: any[]= [];
  filteredCharacters : any[]=[];

  constructor(private callApiService: CallAPIService){

  }

  ngOnInit():void{
    this.callApiService.getCharacters().subscribe((data:any)=>{
      this.chatacters = data.results;
      this.filteredCharacters = this.chatacters;
    })
  }

  filterCharacters(criteria:any):void{
    this.filteredCharacters = this.chatacters.filter(character=>{
      let matches = true;
      if(criteria.movie){
        matches = matches && character.films.includes(criteria.movie);
      }
      if(criteria.species){
        matches = matches && character.films.includes(criteria.species);
      }
      if(criteria.vehicle){
        matches = matches && character.films.includes(criteria.vehicle);
      }
      if(criteria.bbirthYearRange){
        const birthYear = parseInt(character.birth_year.replace(/BBY|ABY/, ''), 10);
        matches = matches && (birthYear >= criteria.birthYearRange[0] && birthYear <= criteria.birthYearRange[1]);
      }
      return matches;
    })
  }
}
