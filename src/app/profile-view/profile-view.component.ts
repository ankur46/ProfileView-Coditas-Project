import { ProfileRepo } from './../profile-model/ProfileRepo';



import { Profile } from './../profile-model/Profile';
import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {
@Input() profile:Profile;
@Input() profileRepo:ProfileRepo;
@Output() searchRepo =new EventEmitter();
public showRepo:boolean=false;

  constructor() { }

  ngOnInit() {
  }
  onRepoSearch(repoUrl){
    this.searchRepo.emit({
     value:repoUrl
    })
    if(this.profileRepo){
      this.showRepo=true;
    }
  }

}
