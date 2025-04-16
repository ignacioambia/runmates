import { ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { TokenPayload } from './token-payload.decorator';

describe('TokenPayload Decorator', () => {
  let mockExecutionContext: Partial<ExecutionContext>;

  beforeEach(() => {
    mockExecutionContext = {
      switchToHttp: jest.fn().mockReturnValue({
        getRequest: jest.fn(),
      }),
    };
  });

  test.todo('should return the full payload');
});