import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyrateComponent } from './buyrate.component';

describe('BuyrateComponent', () => {
  let component: BuyrateComponent;
  let fixture: ComponentFixture<BuyrateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyrateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
