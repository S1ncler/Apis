import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent {
  pokemons: any[] = [];
  async ngOnInit(): Promise<void> {
    for (let i = 1; i <= 151; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}/`;
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.pokemons = [...this.pokemons, data];
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
}
