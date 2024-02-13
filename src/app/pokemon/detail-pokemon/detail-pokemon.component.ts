import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
})
export class DetailPokemonComponent implements OnInit {

  
  pokemonList: Pokemon[];
  pokemon: Pokemon | undefined;  
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) { }
  
  ngOnInit(): void {
    const pokemonId: number|null = Number(this.route.snapshot.paramMap.get('id'))
    
    if(pokemonId) {
      // this.pokemon = this.pokemonService.getPokemonById(pokemonId)
      this.pokemonService.getPokemonById(pokemonId).subscribe(pokemon => this.pokemon = pokemon)
      // this.pokemon est egal au pokemon de la list où le pokemon a selectionné est celui dont l'id correspond à la constante de pokemonId (cad l'id en params de l'url)
    }
  }


  deletePokemon(pokemon: Pokemon ) {
    this.pokemonService.deletePokemonById(pokemon.id)
      .subscribe(() => this.goToPokemonList());
  }


  goToPokemonList() {
    this.router.navigate(["/pokemons"]);
  }

  goToEditPokemon(pokemon: Pokemon) {
    this.router.navigate(["/edit/pokemon", pokemon.id]);
  }
}
