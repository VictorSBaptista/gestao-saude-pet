import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPetsComponent } from './total-pets.component';

describe('TotalPetsComponent', () => {
  let component: TotalPetsComponent;
  let fixture: ComponentFixture<TotalPetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalPetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
