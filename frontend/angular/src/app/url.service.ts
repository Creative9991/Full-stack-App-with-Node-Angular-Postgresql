import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MONSTERS } from './mock-monsters';
//import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
//import { of } from 'rxjs/observable/of';
import { Monster } from './monster';
import {Habitate} from './habitate';
import{Live} from './live';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private http:HttpClient) { 
    //console.log(MONSTERS);
  }
  getMonsters(): Observable<Monster[]> {
    return this.http.get<Monster[]>("http://localhost:3000/monsters");
  };

  
    // postMonster(data): Observable<Monster[]> {
    //   // var url = "http://localhost:3000/monsters";
    //   // return this.http.post<Monster[]>(url, data);
    //   return  this.http.post<Monster[]>("http://localhost:3000/monsters");
    // }
/*
   deleteLives(): Observable<Monster[]> {
     return this.http.delete<Monster[]>("http://localhost:3000/monsters");
  };

   putLives(): Observable<Monster[]> {
     return this.http.put<Monster[]>("http://localhost:3000/monsters");
  };
  */
  
  getHabitats(): Observable<Habitate[]> {
    return this.http.get<Habitate[]>("http://localhost:3000/habitats");
  };
   getLives(): Observable<Live[]> {
     return this.http.get<Live[]>("http://localhost:3000/lives");
  };
}



