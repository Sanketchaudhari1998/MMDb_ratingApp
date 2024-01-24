import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MmdbRatingService {

  getMovieApi:string = `https://api.themoviedb.org/3/discover/movie?api_key=5c06fed2cdf4dfcdab132d9e67c1c2e7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`

  searchApi:string = `https://api.themoviedb.org/3/search/movie`

  getMoviesDetails:string = `https://api.themoviedb.org/3/movie/`
  

  movieId = new BehaviorSubject<any>(null)

  constructor(private _httpclient:HttpClient) { }

  getMoviesHomePage():Observable<any>{
    return this._httpclient.get(this.getMovieApi)
  }

  getMovieById(id:number):Observable<any>{
    return this._httpclient.get(`${this.getMoviesDetails}${id}`,{params:{api_key:'5c06fed2cdf4dfcdab132d9e67c1c2e7', language:'en-US'}})
  }

  movieSearch(data:any):Observable<any>{
    return this._httpclient.get(this.searchApi,{params:{api_key:'5c06fed2cdf4dfcdab132d9e67c1c2e7',language:'en-US',query:data,page:'1',include_adult:'false'}})
  }
}
