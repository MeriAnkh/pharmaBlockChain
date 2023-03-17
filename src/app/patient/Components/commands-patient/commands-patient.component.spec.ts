import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandsPatientComponent } from './commands-patient.component';

describe('CommandsPatientComponent', () => {
  let component: CommandsPatientComponent;
  let fixture: ComponentFixture<CommandsPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandsPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandsPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
