import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdComponent } from './editd.component';

describe('EditdComponent', () => {
  let component: EditdComponent;
  let fixture: ComponentFixture<EditdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
