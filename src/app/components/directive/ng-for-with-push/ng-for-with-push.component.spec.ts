import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForWithPushComponent } from './ng-for-with-push.component';

describe('NgForWithPushComponent', () => {
  let component: NgForWithPushComponent;
  let fixture: ComponentFixture<NgForWithPushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgForWithPushComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForWithPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
