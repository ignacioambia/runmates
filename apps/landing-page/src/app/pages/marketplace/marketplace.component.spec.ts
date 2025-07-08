import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LdMarketplace } from './marketplace.component';
import { Auth } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';

describe('LdMarketplace', () => {
  let component: LdMarketplace;
  let fixture: ComponentFixture<LdMarketplace>;
  let mockAuth: jest.Mocked<Auth>;

  beforeEach(async () => {
    // Create a mock Auth service
    mockAuth = {
      currentUser: null,
      onAuthStateChanged: jest.fn(),
      signInWithPopup: jest.fn(),
      signOut: jest.fn(),
    } as any;

    await TestBed.configureTestingModule({
      imports: [LdMarketplace],
      providers: [
        { provide: Auth, useValue: mockAuth }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LdMarketplace);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle user menu', () => {
    expect(component.showUserMenu).toBe(false);
    component.toggleUserMenu();
    expect(component.showUserMenu).toBe(true);
    component.toggleUserMenu();
    expect(component.showUserMenu).toBe(false);
  });

  it('should close user menu when clicking outside', () => {
    component.showUserMenu = true;
    const mockEvent = {
      target: document.createElement('div')
    } as any;
    
    component.onDocumentClick(mockEvent);
    expect(component.showUserMenu).toBe(false);
  });
});
