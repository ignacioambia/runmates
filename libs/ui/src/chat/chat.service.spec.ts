import { TestBed } from '@angular/core/testing';
import { ChatService } from './chat.service';

describe('DialogService', () => {
  let service: ChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatService],
    });

    service = TestBed.inject(ChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
