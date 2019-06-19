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
  public PaginatedArray: any[];
  public sortArray: any[]=[];
  public _sorttoggle:boolean;
  public _total:number=99;
  public _start:number=1;
  public _end:number=3;
  public _showNext:boolean;
  public _showPrevious:boolean;
  public _currentPage:number=1;
  constructor(private profileService: ProfileService) { }

  ngOnInit() {
  }
  onSearch(event) {
    this.reassignValues();
    this._sorttoggle=false;
    this.profileService.getProfiles(event['value'])
      .subscribe(data => {
        this.profile$ = data;
        this.getProfileName();
        this.updatePaging();
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
    this.reassignValues();
    this._sorttoggle=true;
    this.sortArray=[];
    if (sort['sortBy'] == 'name' && this.profile$) {
      for (let item of this.profile$.items) {
        this.sortedNameArray.push(item.name);
      }
      if(sort['sortIn'] == 'asc'){
        this.sortArray = this.sortedNameArray.sort();
      }
      else{
        this.sortArray = this.sortedNameArray.sort().reverse();
      }
    }
    if (sort['sortBy'] == 'score' && this.profile$) {
      for (let item of this.profile$.items) {
        this.sortedRankArray.push(item.score);
      }
      if(sort['sortIn'] == 'asc'){
        this.sortArray = this.sortedRankArray.sort();
      }
      else{
        this.sortArray = this.sortedRankArray.sort().reverse();
      }
    }
    this.updatePaging();
  }

 updatePaging(data?){
  if( data && data['val'] == true){
    this._currentPage= this._currentPage+1;
  }
  if( data && data['val'] == false){
   this._currentPage= this._currentPage-1;
  }
  if(this._currentPage == 1){
    this._showPrevious=false;
  }
  if(data && this._currentPage != 1){
    this._showPrevious=true;
  }
  this._start=((this._currentPage -1) * 3)+1;
  if(this._currentPage * 3 <= this._total){
    this._end = this._currentPage * 3;
  }
  else{
    this._end = this._total - this._end;
  }
  if(this._end == this._total){
    this._showNext= false;
  }
  if(this._end != this._total){
    this._showNext=true;
  }
  if(this._sorttoggle == false){
    this.PaginatedArray=this.profile$.items.slice((this._start-1) , this._end);
  }
  if(this._sorttoggle == true){
    this.sortArray=this.sortArray.slice((this._start-1) , this._end);
  }
 
 }
 reassignValues(){
   this._showPrevious=false;
   this._showNext=true;
   this._end=3;
   this._start=1;
   this._currentPage=1;
 }
}
