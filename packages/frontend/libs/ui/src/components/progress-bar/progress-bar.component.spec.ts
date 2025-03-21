import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RmProgressBar } from './progress-bar.component';

describe('RmProgressBar', () => {
  let component: RmProgressBar;
  let fixture: ComponentFixture<RmProgressBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RmProgressBar],
    }).compileComponents();

    fixture = TestBed.createComponent(RmProgressBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  test.todo('progress bar should not go bigger than container');
  test.todo('progress-bar should render the right width %');
});
