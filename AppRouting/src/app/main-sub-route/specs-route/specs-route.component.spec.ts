import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecsRouteComponent } from './specs-route.component';

describe('SpecsRouteComponent', () => {
  let component: SpecsRouteComponent;
  let fixture: ComponentFixture<SpecsRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecsRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecsRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
