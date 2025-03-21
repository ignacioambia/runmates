import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RmDialog } from './dialog.component';
import { RmDialogParams } from './dialog.model';
import { RM_DIALOG_PARAMS } from '../../../services/dialog/dialog.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

describe('RmDialog', () => {
  let component: RmDialog;
  let fixture: ComponentFixture<RmDialog>;
  let dialogParams: RmDialogParams;

  beforeEach(async () => {
    dialogParams = {
      title: 'Hey!',
      content: 'Some content',
    };

    await TestBed.configureTestingModule({
      imports: [
        RmDialog,
      ],
      providers: [
        provideAnimationsAsync(),
        { provide: RM_DIALOG_PARAMS, useValue: dialogParams },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RmDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
