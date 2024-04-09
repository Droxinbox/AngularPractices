import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstInjectComponentComponent } from './first-inject-component.component';

describe('FirstInjectComponentComponent', () => {
  let component: FirstInjectComponentComponent;
  let fixture: ComponentFixture<FirstInjectComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstInjectComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstInjectComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
