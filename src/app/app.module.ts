import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesDetailComponent } from './movies/movies-detail/movies-detail.component';
import { FormsModule } from '@angular/forms';
import { AddMoviesComponent } from './movies/add-movies/add-movies.component';
import { EditMoviesComponent } from './movies/edit-movies/edit-movies.component';
import { DeleteMoviesComponent } from './movies/delete-movies/delete-movies.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NewAccountComponent,
    NewAccountComponent,
    MoviesComponent,
    MoviesDetailComponent,
    AddMoviesComponent,
    EditMoviesComponent,
    DeleteMoviesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
