import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActSixProvidersModComponent } from './act-six-providers-mod.component';

describe('ActSixProvidersModComponent', () => {
  let component: ActSixProvidersModComponent;
  let fixture: ComponentFixture<ActSixProvidersModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActSixProvidersModComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActSixProvidersModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
