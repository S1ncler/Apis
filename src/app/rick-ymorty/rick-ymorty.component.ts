import { Component } from '@angular/core';

@Component({
  selector: 'app-rick-ymorty',
  templateUrl: './rick-ymorty.component.html',
  styleUrls: ['./rick-ymorty.component.css'],
})
export class RickYMortyComponent {
  private url = 'https://rickandmortyapi.com/api/character';
  personajes: any;
  page: number = 1;

  ngOnInit(): void {
    fetch(this.url)
      .then((response) => response.json())
      .then((data) => {
        this.personajes = data.results;
        this.url = data.info.next;
        console.log(this.url);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  cargarMas() {
    fetch(this.url)
      .then((response) => response.json())
      .then((data) => {
        this.personajes = [...this.personajes, ...data.results];
        this.url = data.info.next;
        console.log(this.url);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
