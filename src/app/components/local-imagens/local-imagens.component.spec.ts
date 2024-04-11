import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalImagensComponent } from './local-imagens.component';

describe('LocalImagensComponent', () => {
  let component: LocalImagensComponent;
  let fixture: ComponentFixture<LocalImagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalImagensComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocalImagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
