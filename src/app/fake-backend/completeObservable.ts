import { Observable } from 'rxjs';

export const completedObservable = <T>(value: T): Observable<T> => {
  return new Observable<T>((observer) => {
    observer.next(value);
    observer.complete();
  });
};
