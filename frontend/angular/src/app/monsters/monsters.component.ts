import { Component, OnInit } from '@angular/core';
import { Monster } from '../monster';
//import { HEROES } from '../mock-heroes';
// import { MONSTERS } from '../mock-monsters';
import { Router } from '@angular/router'
import { UrlService} from '../url.service';



@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.css']
})
export class MonstersComponent implements OnInit {
  selectedMonster: Monster;
 
  monsters: Monster[];



  constructor(private router: Router, private urlService: UrlService) {
    
   
   }

  ngOnInit() {
    this.getMonsters();
    console.log(this.monsters);
  }
  getMonsters(): void {
    this.urlService.getMonsters()
        .subscribe(monsters => this.monsters = monsters);
  }
}
