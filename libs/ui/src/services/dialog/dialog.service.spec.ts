import { TestBed } from '@angular/core/testing';

import { RM_DIALOG_PARAMS, RmDialogService } from './dialog.service';
import { RmDialogParams } from '../../components/feedback/dialog/dialog.model';
import { ViewContainerRef } from '@angular/core';

describe('DialogService', () => {
  let service: RmDialogService;
  let dialogParams: RmDialogParams;

  beforeEach(() => {
    dialogParams = {
      title: 'Hey!',
      content: 'Some content',
    };
    TestBed.configureTestingModule({
      providers: [
        RmDialogService,
        { provide: RM_DIALOG_PARAMS, useValue: dialogParams },
        { provide: ViewContainerRef, useValue: { createComponent: jest.fn() } },
      ],
    });
    service = TestBed.inject(RmDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
