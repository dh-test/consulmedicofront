import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarcComponent } from './listarc.component';

describe('ListarcComponent', () => {
  let component: ListarcComponent;
  let fixture: ComponentFixture<ListarcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
