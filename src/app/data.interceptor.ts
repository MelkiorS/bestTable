import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {SomeData} from "./services/data.service";

export class DataInterceptor implements HttpInterceptor {
  private fetchCowApi = './assets/data.json'
  private idHolder = 42;


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.url.includes('data/item')) {
      if (req.method === 'GET') {
        const cloned = req.clone({url: this.fetchCowApi})
        return next.handle(cloned)
      }

      if (req.method === 'PUT') {
        return of(new HttpResponse({status: 200, body: {data: req.body}}))
      }

      if (req.method === 'DELETE') {
        return of(new HttpResponse({status: 200}))
      }


      if (req.method === 'POST') {
        const updated = this.getNewData(req.body)
        return of(new HttpResponse({status: 200, body: {data: updated}}))
      }
    }

    return next.handle(req);
  }

  getNewData(body: SomeData) {
    let fakeId = (this.idHolder++).toString()
    body.cowId = fakeId
    body.animalId = fakeId
    body.eventId = fakeId
    body.newGroupId = fakeId
    body.currentGroupId = fakeId
    return body
  }


}
