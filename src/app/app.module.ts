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
import { AccountComponent } from './account/account.component';
import { AccountService } from './account.service';
import { LoggingService } from './logging.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';


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
    AccountComponent,
    AuthComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AccountService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
