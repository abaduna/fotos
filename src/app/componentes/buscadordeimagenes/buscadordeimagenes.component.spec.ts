import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadordeimagenesComponent } from './buscadordeimagenes.component';

describe('BuscadordeimagenesComponent', () => {
  let component: BuscadordeimagenesComponent;
  let fixture: ComponentFixture<BuscadordeimagenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadordeimagenesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscadordeimagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
