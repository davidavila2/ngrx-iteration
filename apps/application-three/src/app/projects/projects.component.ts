import { Component, OnInit } from '@angular/core';
import { PokemonService } from '@workspace/core-data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  pokemon$;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon() {
    this.pokemon$ = this.pokemonService.all();
  }

}
