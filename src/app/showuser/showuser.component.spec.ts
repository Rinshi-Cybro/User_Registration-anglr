import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowuserComponent } from './showuser.component';

describe('ShowuserComponent', () => {
  let component: ShowuserComponent;
  let fixture: ComponentFixture<ShowuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowuserComponent]
    });
    fixture = TestBed.createComponent(ShowuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
