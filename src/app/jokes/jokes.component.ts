import { Component } from '@angular/core';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css'],
})
export class JokesComponent {
  jokes: any[] = [];
  ngOnInit(): void {
    fetch('https://v2.jokeapi.dev/joke/Any?amount=10')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.jokes);
        this.jokes = data.jokes;
      });
  }
  recargar() {
    fetch('https://v2.jokeapi.dev/joke/Any?amount=10')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.jokes);
        this.jokes = data.jokes;
      });
  }
}
