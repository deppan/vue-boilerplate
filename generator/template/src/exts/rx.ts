import { defer, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

export type Action = () => void

declare module 'rxjs' {
  interface Observable<T> {
    doOnSubscribe(onSubscribe: Action): Observable<T>
    onOnTerminate(onTerminate: Action): Observable<T>
  }
}

Observable.prototype.doOnSubscribe = function (onSubscribe: Action) {
  const self = this
  return defer(() => {
    onSubscribe()
    return self
  })
}

Observable.prototype.onOnTerminate = function (onTerminate: Action) {
  return this.pipe(
    finalize(() => onTerminate()),
  )
}