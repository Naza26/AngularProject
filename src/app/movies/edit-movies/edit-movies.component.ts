import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-edit-movies',
  templateUrl: './edit-movies.component.html',
  styleUrls: ['./edit-movies.component.css']
})
export class EditMoviesComponent implements OnInit {
  loadedData: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onFetchMovieData() {
    this.onFetchMovies();
  }

  private onFetchMovies() {
    // Get Http Request
    this.http.get('https://angular-project-80012-default-rtdb.firebaseio.com/movies.json')
    .pipe(map(responseData => {
      const postArray = [];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          postArray.push({...responseData[key as keyof Object], id: key});
        }
      }
      return postArray;
    }))
    .subscribe(posts => {
      this.loadedData = posts;
    });
  }

}
