import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-movies',
  templateUrl: './add-movies.component.html',
  styleUrls: ['./add-movies.component.css']
})
export class AddMoviesComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onCreateMovie(movieData: {movieTitle: string, movieYear: string, movieDescription: string, seenMovie: boolean}) {
    // Send Http Request
    this.http.post('https://sample-project-bf329-default-rtdb.firebaseio.com/posts.json', movieData)
    .subscribe(responseData => {
      console.log(responseData);
    });
  }

}
