import { Injectable, InjectionToken, Injector, ViewContainerRef } from '@angular/core';
import { RmDialog } from '../../components/feedback/dialog/dialog.component';
import { RmDialogParams } from '../../components/feedback/dialog/dialog.model';

export const RM_DIALOG_PARAMS = new InjectionToken<any>('RM_DIALOG_PARAMS');


@Injectable({
  providedIn: 'root'
})
export class RmDialogService {

  constructor(private viewContainerRef: ViewContainerRef) {}
  
  public open(RmDialogParams: RmDialogParams) {
    const componentRef= this.viewContainerRef.createComponent(RmDialog, {
      injector: this.createInjector(RmDialogParams),
    });
    componentRef.instance.dialogClose.subscribe(() => {
      componentRef.destroy();
    });
  }

  private createInjector(dialogParams: RmDialogParams): Injector {
    return Injector.create({
      providers: [{ provide: RM_DIALOG_PARAMS, useValue: dialogParams}]
    })
  }
}
