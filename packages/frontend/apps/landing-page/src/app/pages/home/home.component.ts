import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RmButton, RmDialogService, RmInput, RmPartyIcon } from '@runmates/ui';
import { LdCoundown } from './coundown/coundown.component';
import { HttpClient } from '@angular/common/http';
import { finalize, Subscription } from 'rxjs';
import { FormGroupControls } from '@runmates/ui/types';
import { Lead } from '@runmates/types/leads';

@Component({
  selector: 'ld-home',
  imports: [CommonModule, ReactiveFormsModule, RmInput, RmButton, LdCoundown],
  templateUrl: './home.component.html',
  providers: [RmDialogService],
  styleUrl: './home.component.scss',
})
export class LdHome {
  public validForm = false;
  public isSubmitting = false;
  public infoFg = new FormGroup<FormGroupControls<Lead>>({
    name: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(private http: HttpClient, private dialog: RmDialogService) {
    this.infoFg.statusChanges.subscribe((status) => {
      this.validForm = status === 'VALID';
    });
  }

  public submitLead(): Subscription {
    this.isSubmitting = true;
    return this.http
      .post('/lead', this.infoFg.value)
      .pipe(finalize(() => (this.isSubmitting = false)))
      .subscribe(() => {
        this.dialog.open({
          title: '¡Estás dentro!',
          content:
            'Te enviaremos un correo en cuanto la aplicación esté disponible.',
          icon: RmPartyIcon,
        });
      });
  }
}
