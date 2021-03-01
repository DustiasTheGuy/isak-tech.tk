import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPComponent } from './privacy-p.component';

describe('PrivacyPComponent', () => {
  let component: PrivacyPComponent;
  let fixture: ComponentFixture<PrivacyPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivacyPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
