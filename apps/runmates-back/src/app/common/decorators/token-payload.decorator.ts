import { createParamDecorator, ExecutionContext, UnauthorizedException } from '@nestjs/common';

export const TokenPayload = createParamDecorator(
  (data: keyof any | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const payload = request.tokenPayload;

    if (!payload) {
      throw new UnauthorizedException('Token payload is missing');
    }

    return data ? payload[data] : payload; // Return the full payload or a specific field
  },
);