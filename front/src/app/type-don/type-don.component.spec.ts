import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeDonComponent } from './type-don.component';

describe('TypeDonComponent', () => {
  let component: TypeDonComponent;
  let fixture: ComponentFixture<TypeDonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeDonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeDonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
