import { ExecutionContext } from '@nestjs/common';

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
