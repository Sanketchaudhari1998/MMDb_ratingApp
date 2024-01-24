import { Component, OnInit } from '@angular/core';
import { MmdbRatingService } from '../service/mmdb-rating.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  movies:any
  imgPrefix:any ='https://www.themoviedb.org/t/p/w1280'

  filterData:any
  toggle:boolean=false
  constructor(private _mmdbRating:MmdbRatingService, private _router:Router) { }

  ngOnInit() {
    this._mmdbRating.getMoviesHomePage().subscribe(res => {
      console.log('getMoviesOnHomePage', res);
      this.movies = res.results

    })
  }

  movieDetails(id:number){
    this._mmdbRating.getMovieById(id).subscribe(res=>{
      console.log('movie by id',res)
      this._mmdbRating.movieId.next(res)
    })

    this._router.navigate(['/movieDetails'])
  }

  onSubmit(searchItem:any){
    this.toggle=true
    this._mmdbRating.movieSearch(searchItem).subscribe(res=>{
      console.log('on search',res)
      this.filterData= res.results

    })
  }
}
