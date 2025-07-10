import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

/**
 * Interceptor that adds an authentication token to all outgoing HTTP requests.
 * Gets the token from localStorage and adds it as a Bearer token in the Authorization header.
 */
export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {

  // Get token from localStorage
  const token = localStorage.getItem('token');
  
  // If token exists, clone the request and add the Authorization header
  if (token) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(authReq);
  }
  
  // If no token, proceed with the original request
  return next(req);
};
