import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridMakerComponent } from './grid-maker.component';

describe('GridMakerComponent', () => {
  let component: GridMakerComponent;
  let fixture: ComponentFixture<GridMakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridMakerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
