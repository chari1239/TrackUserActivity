import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserTrackComponent } from './admin-user-track.component';

describe('AdminUserTrackComponent', () => {
  let component: AdminUserTrackComponent;
  let fixture: ComponentFixture<AdminUserTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
