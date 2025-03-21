import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RmLoaderDots } from './loader-dots.component';

describe('RmLoaderDots', () => {
  let component: RmLoaderDots;
  let fixture: ComponentFixture<RmLoaderDots>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RmLoaderDots],
    }).compileComponents();

    fixture = TestBed.createComponent(RmLoaderDots);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
