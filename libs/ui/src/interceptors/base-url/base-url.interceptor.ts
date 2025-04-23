import { HttpInterceptorFn } from '@angular/common/http';
import { RM_API_CONFIG } from '../../rm.module';
import { inject } from '@angular/core';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const apiConfig = inject(RM_API_CONFIG);
  const apiReq = req.clone({url: `${apiConfig.apiUrl}${req.url}`})
  return next(apiReq);
};

