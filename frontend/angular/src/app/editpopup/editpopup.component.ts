import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Dialogcontent } from './dialogcontent';
import{Monsterdata} from '../monstertable'
@Component({
  selector: 'app-editpopup',
  templateUrl: './editpopup.component.html',
  styleUrls: ['./editpopup.component.css']
})
export class EditpopupComponent implements OnInit {
  @Input() isEditsec: boolean;
  @Input() tableContent: any;
  @Output() tableContentStatusChange = new EventEmitter<Element>();
  @Input() itemid: Number;
  dataObj: Monsterdata = {
    monstername : '',
    personality : ''
  }
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog(): void {
    var data;
    if (!!this.itemid) {
      data = this.tableContent.data.filter(item => item.id == this.itemid)[0]
    } else {
      data = this.dataObj;
    }
    let dialogRef = this.dialog.open(Dialogcontent, {
      width: '450px',
       data: data
     });
  }
}
