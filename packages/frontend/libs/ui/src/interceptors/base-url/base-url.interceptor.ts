import { HttpInterceptorFn } from '@angular/common/http';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const baseUrl = 'https://runmates-back-d11d62e14353.herokuapp.com';
  const apiReq = req.clone({url: `${baseUrl}${req.url}`})
  return next(apiReq);
};
