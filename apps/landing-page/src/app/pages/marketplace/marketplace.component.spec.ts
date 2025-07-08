import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LdMarketplace } from './marketplace.component';

describe('LdMarketplace', () => {
  let component: LdMarketplace;
  let fixture: ComponentFixture<LdMarketplace>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LdMarketplace],
    }).compileComponents();

    fixture = TestBed.createComponent(LdMarketplace);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
