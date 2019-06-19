
import { Profile, items } from './../profile-model/Profile';
import { ProfileService } from './../profile-service/profile.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'profile-search',
  templateUrl: './profile-search.component.html',
  styleUrls: ['./profile-search.component.css']
})
export class ProfileSearchComponent implements OnInit {
@Output() searchData =new EventEmitter();
@Output() sort =new EventEmitter();
public searchValue:string;
  constructor() { }

  ngOnInit() {}

  onSearch(){
    console.log("VALUE "+this.searchValue);
    this.searchData.emit({
      value:this.searchValue
    })
  }

  Sort(sortBy:string,sortIn:string){
    this.sort.emit({
      sortBy:sortBy,
      sortIn:sortIn
    })
  }
}
