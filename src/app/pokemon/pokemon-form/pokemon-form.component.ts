import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-form',
  templateUrl:'./pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon: Pokemon; // <== indique au formulaire qu'on doit lui passer un pokemon pour avoir accès au formulaire
  types: string[];
  isAddForm: boolean

  constructor(private pokemonService: PokemonService,
              private router: Router) { }

  ngOnInit() {
    this.types = this.pokemonService.getPokemonTypeList()
    this.isAddForm = this.router.url.includes('add')
  }

  hasType(type: string): boolean {
    return this.pokemon.types.includes(type)
  }

  selectType($event: Event, type: string) {
    const isChecked = ($event.target as HTMLInputElement).checked; // indique si la check box est coché ou pas

    if(isChecked) {
      this.pokemon.types.push(type); // On ajoute dans l'objet 
    } else {
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1) // index là où on commence et 1 la quantité d'element a delete
    }
  }

  isTypesValid(type: string): boolean {
    // si l'utilisateur à coché une case on l'empêche de deselectionné cette case garantissant un type minimum
    if (this.pokemon.types.length == 1 && this.hasType(type)) { 
      return false;
    }
    // si l'utilisateur à deja selectionné 3 case on doit l'empêcher d'en ajouter d'autres.
    if(this.pokemon.types.length > 2 && !this.hasType(type)) {
      return false
    }
    return true
  }

  onSubmit() {
    // this.router.navigate(['/pokemon', this.pokemon.id]);
    if(this.isAddForm) {
      this.pokemonService.addPokemon(this.pokemon)
        .subscribe((pokemon: Pokemon) => this.router.navigate(['/pokemon', pokemon.id]))
    } else {
      this.pokemonService.updatePokemon(this.pokemon)
        .subscribe(() =>this.router.navigate(['/pokemon', this.pokemon.id]));
    }
  }
}
