import { Component,OnInit,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent implements OnInit {
  @Input() label:string;
  @Input() id:string;
  @Input() type:string;
  @Input() ivalue:string;
  @Output() ivaluechange = new EventEmitter();
  constructor() { 
  }
  change(event){
    var obj={};
    obj[event.currentTarget.id]=this.ivalue
    this.ivaluechange.emit(obj)
  }
  ngOnInit() {
  }
  
}
