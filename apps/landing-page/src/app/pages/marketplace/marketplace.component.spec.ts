import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LdMarketplace } from './marketplace.component';
import { Auth } from '@angular/fire/auth';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';

describe('LdMarketplace', () => {
  let component: LdMarketplace;
  let fixture: ComponentFixture<LdMarketplace>;
  let mockAuth: Partial<Auth>;
  let mockRouter: Partial<Router>;

  beforeEach(async () => {
    // Create a mock Auth service
    mockAuth = {
      currentUser: null,
      onAuthStateChanged: jest.fn(),
    } as any;

    // Create a mock Router service
    mockRouter = {
      navigate: jest.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [LdMarketplace, HttpClientTestingModule],
      providers: [
        { provide: Auth, useValue: mockAuth },
        { provide: Router, useValue: mockRouter }
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
    } as unknown as MouseEvent;
    
    component.onDocumentClick(mockEvent);
    expect(component.showUserMenu).toBe(false);
  });
});
