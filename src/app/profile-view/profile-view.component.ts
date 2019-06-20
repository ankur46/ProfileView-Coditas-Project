import { ProfileRepo } from './../profile-model/ProfileRepo';



import { Profile, items } from './../profile-model/Profile';
import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {
@Input() profile:Profile;
@Input() PaginatedArray:items[];
@Input() PaginatedsortArray:any[];
@Input() profileRepo:ProfileRepo;
@Input() sortArray:any[];
@Input() sorttoggle:boolean;
@Input() error:boolean;
@Input() start:number;
@Input() end:number;
@Input() showNext:boolean;
@Input() showPrevious:boolean;
@Input() repoDetails:boolean;
@Output() searchRepo =new EventEmitter();
@Output() pagingKey =new EventEmitter();
public _total:number=99;
public detailButtonHide:boolean=true;
public 
public repoVar:string;



  constructor() {}

  ngOnInit() {
    this.sorttoggle=false;
  }
  onDetails(repoUrl){
    this.repoVar=repoUrl;
    this.searchRepo.emit({
     value:repoUrl
    })
    this.detailButtonHide=false;
  }

  onCollapse(val){
   this.detailButtonHide=true;
   this.repoDetails=false;
  }
  updatePaging(val){
   this.pagingKey.emit({
     val:val
   })
  }
}
