import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LdSell } from './sell.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';

describe('LdSell', () => {
  let component: LdSell;
  let fixture: ComponentFixture<LdSell>;
  let mockRouter: Partial<Router>;

  beforeEach(async () => {
    // Create a mock Router service
    mockRouter = {
      navigate: jest.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [LdSell, HttpClientTestingModule],
      providers: [
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LdSell);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
