import { ProfileRepo } from './../profile-model/ProfileRepo';
import { ProfileService } from './../profile-service/profile.service';
import { Profile } from './../profile-model/Profile';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile-view-search',
  templateUrl: './profile-view-search.component.html',
  styleUrls: ['./profile-view-search.component.css']
})
export class ProfileViewSearchComponent implements OnInit {
  public profile$:Profile;
  public profileRepo$:ProfileRepo;
  constructor(private profileService : ProfileService) { }

  ngOnInit() {
    
  }
  onSearch(event){
    this.profileService.getProfiles(event['value'])
    .subscribe(data =>{
      this.profile$=data;
      this.getProfileName();
    })
  }

  getProfileName(){
    for(let item of this.profile$.items){
     this.profileService.getProfileName(item.url)
     .subscribe(data =>{
      item.name= <string>data;
    })
    }    
  }

  onRepoSearch(repoUrl){
   this.profileService.getProfileRepo(repoUrl['value'])
   .subscribe(data =>{
     this.profileRepo$=data;
   })
  }
}
