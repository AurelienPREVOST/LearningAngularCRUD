import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  template: `
    <h2 class="center"> Editer {{ pokemon?.name }}</h2>
    <p *ngIf="pokemon" class="center" style="height:40vh">
      <img [src]="pokemon.picture" style="height:90%">
    </p>
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `,
  styles: [
  ]
})
export class EditPokemonComponent implements OnInit {

  pokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute,
              private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    const pokemonId: number|null = Number(this.route.snapshot.paramMap.get('id'));
    if(pokemonId){
      // this.pokemon = this.pokemonService.getPokemonById(+pokemonId)
      this.pokemonService.getPokemonById(pokemonId).subscribe(pokemon => this.pokemon = pokemon)
    } else {
      this.pokemon = undefined
    }
  }

}
