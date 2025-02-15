import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RmButton } from './button.component';

describe('RmButton', () => {
  let component: RmButton;
  let fixture: ComponentFixture<RmButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RmButton],
    }).compileComponents();

    fixture = TestBed.createComponent(RmButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
