/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

//TODO: Add tests
@Component({
  selector: 'button[rm-button], a[rm-button]',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class RmButton {}
