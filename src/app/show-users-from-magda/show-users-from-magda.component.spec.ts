import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ShowUsersFromMagdaComponent} from './show-users-from-magda.component';

describe('ShowUsersFromMagdaComponent', () => {
  let component: ShowUsersFromMagdaComponent;
  let fixture: ComponentFixture<ShowUsersFromMagdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowUsersFromMagdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUsersFromMagdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
