import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RmButton, RmInput } from '@runmates/ui';
import { LdCoundown } from './coundown/coundown.component';

@Component({
  selector: 'ld-home',
  imports: [CommonModule, ReactiveFormsModule, RmInput, RmButton, LdCoundown],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class LdHome {
  public validForm = false;
  public infoFg = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor() {
    this.infoFg.statusChanges.subscribe((status) => {
      this.validForm = status === 'VALID';
    });
  }
}
