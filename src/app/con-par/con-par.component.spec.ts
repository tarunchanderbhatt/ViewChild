import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConParComponent } from './con-par.component';

describe('ConParComponent', () => {
  let component: ConParComponent;
  let fixture: ComponentFixture<ConParComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConParComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConParComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
