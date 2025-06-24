/* eslint-disable @angular-eslint/component-selector */
import { Component, effect, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RmLoaderDots } from '../feedback/loaders/loader-dots/loader-dots.component';

// Define button variant type
export type RmButtonVariant = 'primary' | 'outline';

//TODO: Add tests
@Component({
  selector: 'button[rm-button], a[rm-button]',
  imports: [CommonModule, RmLoaderDots],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  host: {
    '[class.loading]': 'loading()',
    '[class.variant-primary]': 'variant() === "primary"',
    '[class.variant-outline]': 'variant() === "outline"',
  }
})
export class RmButton {
  public loading = input<boolean>(false);
  public variant = input<RmButtonVariant>('primary');
}
