import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAlltransacaitonsComponent } from './view-alltransacaitons.component';

describe('ViewAlltransacaitonsComponent', () => {
  let component: ViewAlltransacaitonsComponent;
  let fixture: ComponentFixture<ViewAlltransacaitonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAlltransacaitonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAlltransacaitonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
