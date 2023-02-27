import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@app/components/login/login.component';
import { MovieDetailComponent } from '@app/components/movie-detail/movie-detail.component';
import { MoviesListComponent } from '@app/components/movies-list/movies-list.component';
import { ProfileComponent } from '@app/components/profile/profile.component';

const routes: Routes = [
  {
    path: 'movies',
    component: MoviesListComponent
  },
  {
    path: 'movies/:id',
    component: MovieDetailComponent
  },
  {
    path: 'auth/login',
    component: LoginComponent
  },
  {
    path: 'auth/profile',
    component: ProfileComponent
  },
  {
    path: '**',
    component: LoginComponent
  },
  {
    path: '**',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
