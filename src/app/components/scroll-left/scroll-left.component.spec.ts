import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollLeftComponent } from './scroll-left.component';

describe('ScrollLeftComponent', () => {
  let component: ScrollLeftComponent;
  let fixture: ComponentFixture<ScrollLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollLeftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrollLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
