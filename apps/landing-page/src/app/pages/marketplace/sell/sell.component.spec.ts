import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LdSell } from './sell.component';

describe('LdSell', () => {
  let component: LdSell;
  let fixture: ComponentFixture<LdSell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LdSell],
    }).compileComponents();

    fixture = TestBed.createComponent(LdSell);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
