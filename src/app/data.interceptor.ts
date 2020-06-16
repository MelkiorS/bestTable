import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable, of} from "rxjs";

export class DataInterceptor implements HttpInterceptor {
  private fetchCowApi = './assets/data.json'


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.url === 'data/item') {
      if (req.method === 'GET') {
        const cloned = req.clone({url: this.fetchCowApi})
        return next.handle(cloned)
      }

      if (req.method === 'PUT') {
        return of(new HttpResponse({status: 200, body: {data: req.body}}))
      }
    }

    return next.handle(req);
  }

}
