import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RmDialog } from './dialog.component';

describe('RmDialog', () => {
  let component: RmDialog;
  let fixture: ComponentFixture<RmDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RmDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(RmDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
