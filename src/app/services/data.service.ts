import { delay, finalize, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  private getData(): Observable<any> {
    const dataObservable = this.http.get<any>('../../assets/data/page-data.json').pipe(
      tap(val => {
        console.log('getData STARTED');
      }),
      delay(5000),
      finalize(() => {
        console.log('getData COMPLETED');
      })
    );

    return dataObservable;
  }
}
