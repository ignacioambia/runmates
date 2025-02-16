import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RmParty } from './party.component';

describe('RmParty', () => {
  let component: RmParty;
  let fixture: ComponentFixture<RmParty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RmParty],
    }).compileComponents();

    fixture = TestBed.createComponent(RmParty);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
