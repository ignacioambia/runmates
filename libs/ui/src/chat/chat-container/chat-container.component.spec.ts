import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RmChatContainer } from './chat-container.component';

describe('RmChatContainer', () => {
  let component: RmChatContainer;
  let fixture: ComponentFixture<RmChatContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RmChatContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(RmChatContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
