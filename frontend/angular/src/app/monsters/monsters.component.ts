import { Component, OnInit,NgModule } from '@angular/core';
import { Monster } from '../monster';
import { Router } from '@angular/router'
import { UrlService} from '../url.service';


@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.css']
})
export class MonstersComponent implements OnInit {
  public show_dialog : boolean = false;
  monsterdata:any={
    monstername:'',
    personality:''
  }
  //isMiddleDivVisible: boolean = false;
  selectedMonster: Monster;
 
  monsters: Monster[];
  constructor(private router: Router, private urlService: UrlService) {
   
   }

  ngOnInit() {
    this.getMonsters();
    //console.log(this.monsters);
  }
  getMonsters(): void {
    
    this.urlService.getMonsters()
        .subscribe(monsters => this.monsters = monsters);
  }
   postMonster(): void {
  this.urlService.postMonsters(this.monsterdata)
         .subscribe(monsters => console.log(monsters),
         (error) => console.log(error) 
         );
         console.log(this.monsterdata);
    }

   
valuechange(data){
  Object.getOwnPropertyNames(data).forEach(item=>{
      this.monsterdata[item]=data[item];
  })
}
toggle() {
  this.show_dialog = !this.show_dialog;
}
 }
