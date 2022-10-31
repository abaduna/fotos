import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarimagenenComponent } from './listarimagenen.component';

describe('ListarimagenenComponent', () => {
  let component: ListarimagenenComponent;
  let fixture: ComponentFixture<ListarimagenenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarimagenenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarimagenenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
