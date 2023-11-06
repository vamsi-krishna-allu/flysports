import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolleyBallComponent } from './volley-ball.component';

describe('VolleyBallComponent', () => {
  let component: VolleyBallComponent;
  let fixture: ComponentFixture<VolleyBallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VolleyBallComponent]
    });
    fixture = TestBed.createComponent(VolleyBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
