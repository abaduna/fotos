import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErorresComponent } from './erorres.component';

describe('ErorresComponent', () => {
  let component: ErorresComponent;
  let fixture: ComponentFixture<ErorresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErorresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErorresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
