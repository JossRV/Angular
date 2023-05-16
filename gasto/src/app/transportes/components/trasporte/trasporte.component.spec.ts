import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrasporteComponent } from './trasporte.component';

describe('TrasporteComponent', () => {
  let component: TrasporteComponent;
  let fixture: ComponentFixture<TrasporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrasporteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrasporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
