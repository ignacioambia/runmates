import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppSignup } from './signup.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { RM_API_CONFIG } from '@runmates/ui';
import { importProvidersFrom } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage-angular';

describe('AppSignup', () => {
  let component: AppSignup;
  let fixture: ComponentFixture<AppSignup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppSignup],
      providers: [provideHttpClient(), provideHttpClientTesting(), { provide: RM_API_CONFIG, useValue: {} }, importProvidersFrom(IonicStorageModule.forRoot()),],
    }).compileComponents();

    fixture = TestBed.createComponent(AppSignup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
