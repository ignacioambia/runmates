import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RmTrainingCard } from './training-card.component';

describe('RmTrainingCard', () => {
  let component: RmTrainingCard;
  let fixture: ComponentFixture<RmTrainingCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RmTrainingCard],
    }).compileComponents();

    fixture = TestBed.createComponent(RmTrainingCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
