import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LdCoundown } from './coundown.component';

describe('LdCoundown', () => {
  let component: LdCoundown;
  let fixture: ComponentFixture<LdCoundown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LdCoundown],
    }).compileComponents();

    fixture = TestBed.createComponent(LdCoundown);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
