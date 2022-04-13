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

    if (
      req.url == `${environment.backendUrl}/auth/users/` ||
      req.url == `${environment.backendUrl}/socialmedia/image_upload/`
    ) {
      return next.handle(req);
    }

    if (req.url.startsWith(environment.backendUrl)) {
      const reqWithHeaders = req.clone({
        setHeaders: {
          Authorization: `JWT ${localStorage.getItem('accessToken')}`,
        },
      });

      return next.handle(reqWithHeaders);
    }

    return next.handle(req);
  }
}
