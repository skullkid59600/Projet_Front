import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymlistComponent } from './gymlist.component';

describe('GymlistComponent', () => {
  let component: GymlistComponent;
  let fixture: ComponentFixture<GymlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GymlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
