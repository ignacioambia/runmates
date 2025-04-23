import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RmChatContainer } from './chat-container.component';
import { RM_API_CONFIG } from '../../rm.module';

describe('RmChatContainer', () => {
  let component: RmChatContainer;
  let fixture: ComponentFixture<RmChatContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RmChatContainer],
      providers: [{ provide: RM_API_CONFIG, useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(RmChatContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
