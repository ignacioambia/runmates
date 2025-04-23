import { TestBed } from '@angular/core/testing';
import { ChatService } from './chat.service';
import { RM_API_CONFIG } from '../rm.module';

describe('DialogService', () => {
  let service: ChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatService, { provide: RM_API_CONFIG, useValue: {} }],
    });

    service = TestBed.inject(ChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
