import { Component, OnInit } from '@angular/core';
import { Movie } from './movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = [
    new Movie('Star Wars', '1977', 'Sci-Fi', 'angular-project/src/app/images/star_wars_image.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
