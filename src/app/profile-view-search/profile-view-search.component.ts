import { ProfileRepo } from './../profile-model/ProfileRepo';
import { ProfileService } from './../profile-service/profile.service';
import { Profile, items } from './../profile-model/Profile';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile-view-search',
  templateUrl: './profile-view-search.component.html',
  styleUrls: ['./profile-view-search.component.css']
})
export class ProfileViewSearchComponent implements OnInit {
  public profile$: Profile;
  public profileRepo$: ProfileRepo;
  public sortedNameArray: any[] = [];
  public sortedRankArray: any[] = [];
  public sortBy: string;
  public sortIn: string;
  constructor(private profileService: ProfileService) { }

  ngOnInit() {}
  onSearch(event) {
    this.profileService.getProfiles(event['value'])
      .subscribe(data => {
        this.profile$ = data;
        this.getProfileName();
      })
  }

  getProfileName() {
    for (let item of this.profile$.items) {
      this.profileService.getProfileName(item.url)
        .subscribe(data => {
          item.name = <string>data;
        })
    }
  }

  onRepoSearch(repoUrl) {
    this.profileService.getProfileRepo(repoUrl['value'])
      .subscribe(data => {
        this.profileRepo$ = data;
      })
  }

  Sort(sort) {
    this.sortBy = sort['sortBy'];
    this.sortIn = sort['sortIn'];
    console.log("sort " + sort['sortBy'] + " " + sort['sortIn']);
    if (this.sortBy == 'name' && this.profile$) {
      for (let item of this.profile$.items) {
        this.sortedNameArray.push(item.name);
      }
      this.sortedNameArray = this.sortedNameArray.sort();
    }
    if (this.sortBy == 'rank' && this.profile$) {
      for (let item of this.profile$.items) {
        this.sortedRankArray.push(item.score);
      }
      console.log("BEFORE " + this.sortedRankArray);
      this.sortedRankArray = this.sortedRankArray.sort();
      console.log("After " + this.sortedRankArray);
    }
  }
}
