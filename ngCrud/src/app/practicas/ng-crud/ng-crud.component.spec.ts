import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCrudComponent } from './ng-crud.component';

describe('NgCrudComponent', () => {
  let component: NgCrudComponent;
  let fixture: ComponentFixture<NgCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
