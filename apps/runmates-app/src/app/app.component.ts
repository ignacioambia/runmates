import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { RmModule } from '@runmates/ui';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, RmModule],
})
export class AppComponent {
  constructor(private storage: Storage) {
    this.storage.create();
  }
}
