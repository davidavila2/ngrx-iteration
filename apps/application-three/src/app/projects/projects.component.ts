import { Component, OnInit } from '@angular/core';
import { PokeDetails, PokeResource } from '@workspace/core-data';
import { Observable } from 'rxjs';
import { PokemonFacade } from '@workspace/core-state'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  pokemon$: Observable<PokeDetails[]> = this.pokemonFacade.pokemon$;
  // currentPokemon$: Observable<PokeDetails> = this.pokemonFacade.currentPokemon$;
  isLoading$: Observable<boolean> = this.pokemonFacade.isPokemonLoading$

  constructor(private pokemonFacade: PokemonFacade) {}

  ngOnInit() {
    this.pokemonFacade.loadPokemon();
  }

  selectPokemon(pokemon) {
    this.pokemonFacade.selectPokemon(pokemon.id)
  }

  savePokemon(pokemon) {
    pokemon.id ?
      this.pokemonFacade.updatePokemon(pokemon) :
      this.pokemonFacade.createPokemon(pokemon)
  }

  updatePokemon(pokemon) {
    this.pokemonFacade.updatePokemon(pokemon)
  }

  createPokemon(pokemon) {
    this.pokemonFacade.createPokemon(pokemon)
  }

  deletePokemon(pokemon) {
    this.pokemonFacade.deletePokemon(pokemon)
  }

  // pokemon$;

  // constructor(private pokemonService: PokemonService) { }

  // ngOnInit() {
  //   this.getPokemon();
  // }

  // getPokemon() {
  //   this.pokemon$ = this.pokemonService.all();
  // }

}
