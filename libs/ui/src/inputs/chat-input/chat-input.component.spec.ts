import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RmChatInput } from './chat-input.component';

describe('RmChatInput', () => {
  let component: RmChatInput;
  let fixture: ComponentFixture<RmChatInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RmChatInput],
    }).compileComponents();

    fixture = TestBed.createComponent(RmChatInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
