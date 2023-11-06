import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketBallComponent } from './basket-ball.component';

describe('BasketBallComponent', () => {
  let component: BasketBallComponent;
  let fixture: ComponentFixture<BasketBallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasketBallComponent]
    });
    fixture = TestBed.createComponent(BasketBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
