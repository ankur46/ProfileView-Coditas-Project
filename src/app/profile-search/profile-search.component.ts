import { profileRepo } from './../profile-model/ProfileRepo';
import { Profile, items } from './../profile-model/Profile';
import { ProfileService } from './../profile-service/profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile-search',
  templateUrl: './profile-search.component.html',
  styleUrls: ['./profile-search.component.css']
})
export class ProfileSearchComponent implements OnInit {
public profile$:Profile;
  constructor(private profileService : ProfileService) { }

  ngOnInit() {
    this.profileService.getProfiles('varun')
    .subscribe(data =>{
      this.profile$=data;
    })
  }

}
