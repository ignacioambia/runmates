import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RmSend } from './send.component';

describe('RmSend', () => {
  let component: RmSend;
  let fixture: ComponentFixture<RmSend>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RmSend],
    }).compileComponents();

    fixture = TestBed.createComponent(RmSend);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
