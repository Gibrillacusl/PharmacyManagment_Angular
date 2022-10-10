import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineDashboardComponent } from './medicine-dashboard.component';

describe('MedicineDashboardComponent', () => {
  let component: MedicineDashboardComponent;
  let fixture: ComponentFixture<MedicineDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicineDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
