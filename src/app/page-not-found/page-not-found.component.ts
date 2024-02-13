import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class='center'>
      <img src="https://www.pokepedia.fr/images/thumb/4/44/Psykokwak-RFVF.png/800px-Psykokwak-RFVF.png" style="height:200px;margin-top:10vh"/>
      <h1>Oops, cette page n'existe pas!</h1>
      <a routerLink="/pokemons" class="waves-effect waves-teal btn-flat">
        Je me suis perdu!
      </a>
    </div>`
})
export class PageNotFoundComponent{}
