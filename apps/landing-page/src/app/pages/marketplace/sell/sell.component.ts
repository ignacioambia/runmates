import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RmButton, RmDialogService, RmInput } from "@runmates/ui";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'ld-sell',
  imports: [CommonModule, RmInput, RmButton, ReactiveFormsModule],
  templateUrl: './sell.component.html',
  styleUrl: './sell.component.scss',
})
export class LdSell {
  public validForm = false;
  public sellForm = new FormGroup({
    price: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/),  // Allow positive numbers with up to 2 decimal places
      Validators.min(0)
    ]),
    reasonOfSale: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
  });

  private http = inject(HttpClient);
  private router = inject(Router);
  public postingTicket = false;

  constructor() {
    this.sellForm.statusChanges.subscribe((status) => {
      this.validForm = status === 'VALID';
    });
  }

  async postNewTicket() {
    if (this.validForm) {
      const ticket: any = this.sellForm.value;
      ticket.price = parseFloat(ticket.price);

      this.postingTicket = true;
      this.http.post('/marketplace/tickets', ticket).pipe(
        finalize(() => this.postingTicket = false)
      ).subscribe({
        next: () => {
          window.alert('Tu ticket ha sido publicado correctamente. Puedes verlo en el marketplace.');
          this.router.navigate(['/marketplace']);
        },
        error: ({error}) => {
          console.log('Error posting ticket:', error);
          if (error.message) {
            window.alert(error.message);
          }
        }
      });
    }
  }
}
