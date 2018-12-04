import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MONSTERS } from './mock-monsters';
//import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
//import { of } from 'rxjs/observable/of';
import { Monster } from './monster';
import {Habitate} from './habitate';

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
  
  getHabitats(): Observable<Habitate[]> {
    return this.http.get<Habitate[]>("http://localhost:3000/habitats");
  };

}



