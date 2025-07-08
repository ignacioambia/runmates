import { Component, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Auth, signInWithPopup, GoogleAuthProvider, signOut, user } from '@angular/fire/auth';
import { RmButton } from '@runmates/ui';

@Component({
  selector: 'ld-marketplace',
  imports: [CommonModule, RmButton],
  templateUrl: './marketplace.component.html',
  styleUrl: './marketplace.component.scss',
})
export class LdMarketplace {
  private readonly auth = inject(Auth);
  
  // Observable of the current user
  public user$ = user(this.auth);
  
  // User menu state
  public showUserMenu = false;

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
      console.log('User signed in:', result.user);
    } catch (error) {
      console.error('Error signing in:', error);
    }
  }

  public async signOut() {
    try {
      await signOut(this.auth);
      console.log('User signed out');
      this.showUserMenu = false; // Close menu after sign out
    } catch (error) {
      console.error('Error signing out:', error);
    }
  }
}
