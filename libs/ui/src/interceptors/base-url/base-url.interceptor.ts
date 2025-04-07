import { HttpInterceptorFn } from '@angular/common/http';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const baseUrl = 'https://runmates-back-icy-shadow-4369.fly.dev';
  const apiReq = req.clone({url: `${baseUrl}${req.url}`})
  return next(apiReq);
};
