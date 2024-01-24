import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  {path:'', redirectTo:'homePage', pathMatch:'full'},
  {path:'movieDetails', component:MovieDetailsComponent},
  {path:'homePage', component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
