import { Component } from '@angular/core';
import { MovieService } from './movie.service';
import { WatchlistService } from './watchlist.service';
import { HttpClient } from '@angular/common/http';
import { Pipe, } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '03-07-2023';
  flop: any;
  flops$:any;
  // this is how we get http request in angular.
  // constructor(private http:HttpClient){

  // }

  // using service with http request
  constructor(private http:HttpClient, private movie: MovieService, private watch1: WatchlistService) {}
  ngOnInit() {
    this.http.get('http://localhost:3000/movies/0')
        this.movie.getmovie()
        .subscribe((movies)=>{
    this.flop = movies;
    console.log(this.flop)
        })
    // we use the query string parameters as this.
    this.watch1.getwatchlistsort('price').subscribe((data1) => {
      this.flop = data1;
      console.log(this.flop);
    });
    //without suscribe we use $ symbol after the variable that becomes observables 
    this.flops$ = this.watch1.getwatchlistsort('title')
  this.movie.postmovie().subscribe(()=>{
   
  })
  }
  
}
