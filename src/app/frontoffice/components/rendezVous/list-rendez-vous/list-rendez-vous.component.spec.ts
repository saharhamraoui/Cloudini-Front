import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRendezVousComponent } from './list-rendez-vous.component';

describe('ListRendezVousComponent', () => {
  let component: ListRendezVousComponent;
  let fixture: ComponentFixture<ListRendezVousComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListRendezVousComponent]
    });
    fixture = TestBed.createComponent(ListRendezVousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
