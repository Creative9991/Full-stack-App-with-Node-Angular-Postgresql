import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
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
  postMonsters(monsterdata : any[]){
  const httpheaders = new HttpHeaders({'Content-Type' : 'application/json'}); 
  return  this.http.post<Monster[]>("http://localhost:3000/monsters", monsterdata);
    }
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



