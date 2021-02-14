import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetfindproductoComponent } from './getfindproducto.component';

describe('GetfindproductoComponent', () => {
  let component: GetfindproductoComponent;
  let fixture: ComponentFixture<GetfindproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetfindproductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetfindproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
