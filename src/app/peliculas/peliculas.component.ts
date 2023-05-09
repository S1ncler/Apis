import { Component } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss'],
})
export class PeliculasComponent {
  private key: string = 'b52bccd5be60533006df873f7b16dec2';

  movies: any[] = [];
  ratings: any[] = [];

  consultar(pelicula: string = '') {
    pelicula = pelicula.replace(/ /g, '%20');
    const url = `
    https://api.themoviedb.org/3/search/movie?api_key=${this.key}&language=en-US&query=${pelicula}&page=1&include_adult=false`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.movies = data.results;
        console.log(this.movies);
        for (let mov of this.movies)
          if(mov.poster_path) mov.poster_path = 'https://image.tmdb.org/t/p/w500' + mov.poster_path;
          else mov.poster_path = "../assets/images/movie.webp"
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
