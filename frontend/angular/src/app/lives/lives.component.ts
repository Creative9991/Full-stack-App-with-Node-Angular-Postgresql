import { Component, OnInit } from '@angular/core';
import { Live } from '../live';
import { Router } from '@angular/router'
import { UrlService} from '../url.service';

@Component({
  selector: 'app-lives',
  templateUrl: './lives.component.html',
  styleUrls: ['./lives.component.css']
})
export class LivesComponent implements OnInit {
  lives: Live[];
  constructor(private router: Router, private urlService: UrlService) {
   }
  selectedLive: Live;
  ngOnInit() {
    this.getLives();
  }
  getLives(): void {
    this.urlService.getLives()
        .subscribe(lives => this.lives = lives);
  }
}
