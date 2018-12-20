import { Component, OnInit } from '@angular/core';
import { Habitate } from '../habitate';
//import { HEROES } from '../mock-heroes';
// import { MONSTERS } from '../mock-monsters';
import { Router } from '@angular/router'
import { UrlService} from '../url.service';


@Component({
  selector: 'app-habitats',
  templateUrl: './habitats.component.html',
  styleUrls: ['./habitats.component.css']
})
export class HabitatsComponent implements OnInit {
  selectedHabitate: Habitate;
  habitats: Habitate[];
  constructor(private router: Router, private urlService: UrlService) { 
  }
  ngOnInit() {
    this.getHabitats();
   
  }
  getHabitats(): void {
    this.urlService.getHabitats()
        .subscribe(habitats => this.habitats = habitats);
  }
}
