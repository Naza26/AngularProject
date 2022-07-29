import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AddMoviesComponent } from './movies/add-movies/add-movies.component';
import { DeleteMoviesComponent } from './movies/delete-movies/delete-movies.component';
import { EditMoviesComponent } from './movies/edit-movies/edit-movies.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'addMovie', component: AddMoviesComponent },
  { path: 'editMovie', component: EditMoviesComponent },
  { path: 'deleteMovie', component: DeleteMoviesComponent },
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
