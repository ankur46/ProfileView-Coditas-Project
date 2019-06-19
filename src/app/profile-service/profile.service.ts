import { ProfileRepo } from './../profile-model/ProfileRepo';
import { Profile } from './../profile-model/Profile';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {
private SearchUrl= 'https://api.github.com/search/users'
  constructor(private http: HttpClient) { }

  getProfiles(searchString :string) : Observable<Profile>{
    return this.http.get(`${this.SearchUrl}?q=${searchString}`)
    .map((result: Profile) =>{
      return result;
    })
  }

  getProfileRepo(repoUrl : string) : Observable<ProfileRepo>{
   return this.http.get(repoUrl)
   .map((result:ProfileRepo) =>{
         return result;
   })
  }
  getProfileName(profileurl:string):Observable<Profile> {
    return this.http.get(profileurl)
    .map((result:Profile) =>{
      return result['name'];
    })
  }
}
