import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppSignup } from './signup.component';

describe('AppSignup', () => {
  let component: AppSignup;
  let fixture: ComponentFixture<AppSignup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppSignup],
    }).compileComponents();

    fixture = TestBed.createComponent(AppSignup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
