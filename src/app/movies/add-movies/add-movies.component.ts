import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-add-movies',
  templateUrl: './add-movies.component.html',
  styleUrls: ['./add-movies.component.css']
})
export class AddMoviesComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onCreateMovie(movieData: Movie) {
    // Send Http Request
    this.http.post('https://angular-project-80012-default-rtdb.firebaseio.com/movies.json', movieData)
    .subscribe(responseData => {
      console.log(responseData);
    });
  }

}
