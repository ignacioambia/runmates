import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RmPartyIcon } from './party.component';

describe('RmParty', () => {
  let component: RmPartyIcon;
  let fixture: ComponentFixture<RmPartyIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RmPartyIcon],
    }).compileComponents();

    fixture = TestBed.createComponent(RmPartyIcon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
