import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceRegistrationComponent } from './face-registration.component';

describe('FaceRegistrationComponent', () => {
  let component: FaceRegistrationComponent;
  let fixture: ComponentFixture<FaceRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaceRegistrationComponent]
    });
    fixture = TestBed.createComponent(FaceRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
