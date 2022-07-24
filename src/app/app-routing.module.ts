import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMoviesComponent } from './movies/add-movies/add-movies.component';
import { DeleteMoviesComponent } from './movies/delete-movies/delete-movies.component';
import { EditMoviesComponent } from './movies/edit-movies/edit-movies.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'addMovie', component: AddMoviesComponent },
  { path: 'editMovie', component: EditMoviesComponent },
  { path: 'deleteMovie', component: DeleteMoviesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
