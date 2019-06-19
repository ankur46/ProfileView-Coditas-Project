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
@Input() profileRepo:ProfileRepo;
@Input() sortArray:any[];
@Input() sorttoggle:boolean;
@Input() start:number;
@Input() end:number;
@Input() showNext:boolean;
@Input() showPrevious:boolean;
@Output() searchRepo =new EventEmitter();
@Output() pagingKey =new EventEmitter();
public showRepo:boolean=false;
public _total:number=99;



  constructor() {}

  ngOnInit() {
    this.sorttoggle=false;
  }
  onRepoSearch(repoUrl){
    this.searchRepo.emit({
     value:repoUrl
    })
    if(this.profileRepo){
      this.showRepo=true;
    }
  }
  updatePaging(val){
   this.pagingKey.emit({
     val:val
   })
  }
}
