import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAlltreasuryComponent } from './view-alltreasury.component';

describe('ViewAlltreasuryComponent', () => {
  let component: ViewAlltreasuryComponent;
  let fixture: ComponentFixture<ViewAlltreasuryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAlltreasuryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAlltreasuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
