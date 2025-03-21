import { Component, inject, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RmButton } from '../../button/button.component';
import { RM_DIALOG_PARAMS } from '../../../services';
import { RmDialogParams } from './dialog.model';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'rm-dialog',
  imports: [CommonModule, RmButton],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
  animations: [
    trigger('dialogAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'scale(0.8)' }))
      ])
    ])
  ]
})
export class RmDialog {
  public dialogParams = inject<RmDialogParams>(RM_DIALOG_PARAMS);
  public close = output<'confirm' | 'cancel'>();

  public closeDialog() {
    this.close.emit('confirm');
  }
}
