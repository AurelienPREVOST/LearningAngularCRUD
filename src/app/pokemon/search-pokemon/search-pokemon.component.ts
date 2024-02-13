import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
})
export class SearchPokemonComponent implements OnInit {
  //searchTerms represente un flux de donnée dans le temps. On utilise un Subject pour stocker.
  searchTerms = new Subject<string>();

  pokemon$: Observable<Pokemon[]>;


  constructor(
    private router: Router,
    private pokemonService: PokemonService
    ) { }

  ngOnInit(): void {
    this.pokemon$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(), //attend un changement dans les termes de recherche
      switchMap((term) => this.pokemonService.searchPokemonList(term))
    )
  }

  search(term: string) {
    this.searchTerms.next(term) // next fais comme un push dans un array mais avec un flux de donnée
  }

  goToDetail(pokemon: Pokemon) {
    const link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }

}
