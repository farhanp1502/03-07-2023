import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }
  getmovie(){
    return this.http.get('http://localhost:3000/movies/0')
  }

  // this is ow we post in http request
  postmovie(){
    return this.http.post('http://localhost:3000/movies/',{
      dateAdded: new Date,
      onSale: true,
      price: 2.89,
      title: "london bridge"
    })
  }
}
