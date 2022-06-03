import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymcountryComponent } from './gymcountry.component';

describe('GymcountryComponent', () => {
  let component: GymcountryComponent;
  let fixture: ComponentFixture<GymcountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymcountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GymcountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
