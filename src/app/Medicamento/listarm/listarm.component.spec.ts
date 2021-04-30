import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarmComponent } from './listarm.component';

describe('ListarmComponent', () => {
  let component: ListarmComponent;
  let fixture: ComponentFixture<ListarmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
