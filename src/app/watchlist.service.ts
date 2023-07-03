import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {

  constructor(private http:HttpClient) { }
  getwatchlistsort(sorted:string){
   let url = "http://localhost:3000/watchlist?_sort="
    return  this.http.get(url+sorted)
  }
  
}
