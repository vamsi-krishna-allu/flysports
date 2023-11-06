import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadmintonComponent } from './badminton.component';

describe('BadmintonComponent', () => {
  let component: BadmintonComponent;
  let fixture: ComponentFixture<BadmintonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BadmintonComponent]
    });
    fixture = TestBed.createComponent(BadmintonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
