import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LdHome } from './home.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
describe('LdHome', () => {
  let component: LdHome;
  let fixture: ComponentFixture<LdHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LdHome],
      providers: [provideHttpClient(), provideHttpClientTesting()]
    }).compileComponents();

    fixture = TestBed.createComponent(LdHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
