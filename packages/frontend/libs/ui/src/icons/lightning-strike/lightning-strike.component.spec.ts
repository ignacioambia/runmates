import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RmLightningStrike } from './lightning-strike.component';

describe('RmLightningStrike', () => {
  let component: RmLightningStrike;
  let fixture: ComponentFixture<RmLightningStrike>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RmLightningStrike],
    }).compileComponents();

    fixture = TestBed.createComponent(RmLightningStrike);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
