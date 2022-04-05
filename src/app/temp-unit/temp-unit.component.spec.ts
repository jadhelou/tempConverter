import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempUnitComponent } from './temp-unit.component';

describe('TempUnitComponent', () => {
  let component: TempUnitComponent;
  let fixture: ComponentFixture<TempUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
