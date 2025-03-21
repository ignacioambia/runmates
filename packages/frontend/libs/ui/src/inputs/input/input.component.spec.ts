import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RmInput } from './input.component';

describe('RmInput', () => {
  let component: RmInput;
  let fixture: ComponentFixture<RmInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RmInput],
    }).compileComponents();

    fixture = TestBed.createComponent(RmInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
