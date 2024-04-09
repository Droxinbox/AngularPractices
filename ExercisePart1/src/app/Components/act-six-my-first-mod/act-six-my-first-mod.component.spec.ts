import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActSixMyFirstModComponent } from './act-six-my-first-mod.component';

describe('ActSixMyFirstModComponent', () => {
  let component: ActSixMyFirstModComponent;
  let fixture: ComponentFixture<ActSixMyFirstModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActSixMyFirstModComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActSixMyFirstModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
