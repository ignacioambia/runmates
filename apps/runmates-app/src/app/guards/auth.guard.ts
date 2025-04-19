import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { Storage } from "@ionic/storage-angular"

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  // private storage: Storage;
  constructor(private readonly router: Router, private readonly storage: Storage) {
    // this.storage = new Storage();
    // this.storage.create();
  }

  async canActivate(): Promise<boolean> {
    const userIsAuthenticated = await this.storage.get('token');
    console.log('userIsAuthenticated', userIsAuthenticated);
    if (userIsAuthenticated) {
      return true;
    }
    this.router.navigate(['/signup']);
    return false;
  }
}