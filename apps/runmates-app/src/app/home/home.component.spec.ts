import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppHome } from './home.component';
import { provideHttpClient } from '@angular/common/http';

describe('AppHome', () => {
  let component: AppHome;
  let fixture: ComponentFixture<AppHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideHttpClient()],
      imports: [AppHome],
    }).compileComponents();

    fixture = TestBed.createComponent(AppHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
