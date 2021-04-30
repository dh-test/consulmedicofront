import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListardComponent } from './listard.component';

describe('ListardComponent', () => {
  let component: ListardComponent;
  let fixture: ComponentFixture<ListardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
