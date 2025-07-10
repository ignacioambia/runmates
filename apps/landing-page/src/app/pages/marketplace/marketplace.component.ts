import { Component, inject, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Auth, signInWithPopup, GoogleAuthProvider, signOut, user } from '@angular/fire/auth';
import { RmButton } from '@runmates/ui';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ld-marketplace',
  imports: [CommonModule, RmButton],
  templateUrl: './marketplace.component.html',
  styleUrl: './marketplace.component.scss',
})
export class LdMarketplace {
  private readonly auth = inject(Auth);
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
  
  // Observable of the current user
  public user$ = user(this.auth);
  
  // User menu state
  public showUserMenu = false;
  public tickets: any[] = []; // Array to hold tickets data

  public ngOnInit() {
    this.http.get('/marketplace/tickets').subscribe({
      next: (data) => {
        this.tickets = data as any; // Assuming the response is an array of tickets
      }
    });
  }

  public toggleUserMenu() {
    this.showUserMenu = !this.showUserMenu;
  }

  @HostListener('document:click', ['$event'])
  public onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    const userMenu = target.closest('.user-menu');
    
    // Close dropdown when clicking outside the user menu
    if (this.showUserMenu && !userMenu) {
      this.showUserMenu = false;
    }
  }

  public async signIn() {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(this.auth, provider);
      console.log('User signed in:', result.user.getIdToken);

      this.http.post('/auth/firebase', { idToken: await result.user.getIdToken() }).subscribe({
        next: (response: any) => {
          localStorage.setItem('token', response['token']);
        }
    });
  } catch (error) {
      console.error('Error signing in:', error);
      // Handle sign-in errors here (e.g., show a notification)
    }

  }

  public openWhatsApp(phoneNumber: string) {
    // Clean the phone number (remove any non-numeric characters except +)
    const cleanPhone = phoneNumber.replace(/[^\d+]/g, '');
    
    // Create WhatsApp URL with a predefined message
    const message = encodeURIComponent('Hola! Me interesa tu boleto para el medio maratón CDMX. ¿Podrías darme más información?');
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${message}`;
    
    // Open WhatsApp in a new window/tab
    window.open(whatsappUrl, '_blank');
  }

  postTicket(){
    if(!localStorage.getItem('token')) {
      this.signIn();
      return;
    }
    this.router.navigate(['/marketplace/vender-boleto']);
  }

  public async signOut() {
    try {
      await signOut(this.auth);
      console.log('User signed out');
      this.showUserMenu = false; // Close menu after sign out
      localStorage.clear();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  }
}
