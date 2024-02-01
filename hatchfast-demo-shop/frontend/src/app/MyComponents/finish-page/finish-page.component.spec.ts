import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishPageComponent } from './finish-page.component';

describe('FinishPageComponent', () => {
  let component: FinishPageComponent;
  let fixture: ComponentFixture<FinishPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinishPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinishPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
