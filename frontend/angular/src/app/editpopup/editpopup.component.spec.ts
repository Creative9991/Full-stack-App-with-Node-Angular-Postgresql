import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpopupComponent } from './editpopup.component';

describe('EditpopupComponent', () => {
  let component: EditpopupComponent;
  let fixture: ComponentFixture<EditpopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
