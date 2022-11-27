import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartComponentsComponent } from './smart-components.component';

describe('SmartComponentsComponent', () => {
  let component: SmartComponentsComponent;
  let fixture: ComponentFixture<SmartComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
