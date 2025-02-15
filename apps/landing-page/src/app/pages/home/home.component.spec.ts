import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LdHome } from './home.component';

describe('LdHome', () => {
  let component: LdHome;
  let fixture: ComponentFixture<LdHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LdHome],
    }).compileComponents();

    fixture = TestBed.createComponent(LdHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
