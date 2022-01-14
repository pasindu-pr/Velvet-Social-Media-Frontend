import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export class AppInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log(req.url);
    if (req.url.startsWith(environment.backendUrl)) {
      const reqWithHeaders = req.clone({
        setHeaders: {
          Authorization: `JWT ${localStorage.getItem('accessToken')}`,
        },
      });

      console.log('Inside intercepter fi');
      return next.handle(reqWithHeaders);
    }

    return next.handle(req);
  }
}
