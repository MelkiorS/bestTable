import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {MockData} from "./mock/data";

export class DataInterceptor implements HttpInterceptor {


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.url === 'data/cows') {
      const cloned = req.clone({url: MockData.fetchCowApi})
      return next.handle(cloned)
    }

    return next.handle(req);
  }

}
