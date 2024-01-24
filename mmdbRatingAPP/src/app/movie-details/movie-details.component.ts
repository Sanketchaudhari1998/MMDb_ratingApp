import { Component, OnInit } from '@angular/core';
import { MmdbRatingService } from '../service/mmdb-rating.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movieDetails:any

  constructor(private _mmdbrating:MmdbRatingService) { }

  ngOnInit() {
    this.movieData()
  }

  movieData(){
    this._mmdbrating.movieId.subscribe(res=>{
      console.log('getting data by id', res)
      this.movieDetails = res
    })
  }
}
