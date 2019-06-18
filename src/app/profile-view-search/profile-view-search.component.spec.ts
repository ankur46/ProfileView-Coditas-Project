import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileViewSearchComponent } from './profile-view-search.component';

describe('ProfileViewSearchComponent', () => {
  let component: ProfileViewSearchComponent;
  let fixture: ComponentFixture<ProfileViewSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileViewSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileViewSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
