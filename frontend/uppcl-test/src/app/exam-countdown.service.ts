// countdown-timer.service.ts
import { Injectable } from '@angular/core';
import { Subject, Observable, timer } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CountdownTimerService {
  private countdownSource = new Subject<number>();
  countdown$ = this.countdownSource.asObservable();
  private timerCompleteSource = new Subject<void>();
  timerComplete$ = this.timerCompleteSource.asObservable();
  private duration: number=0;

  initDuration(duration: number): void {
    this.duration = duration;
    this.countdownSource.next(duration);
  }

  startTimer(): void {
    timer(0, 1000)
      .pipe(
        takeUntil(timer(this.duration * 1000 + 1000)),
        map((value) => this.duration - value - 1)
      )
      .subscribe(
        (remainingTime) => {
          this.countdownSource.next(remainingTime);
        },
        () => {},
        () => {
          this.timerCompleteSource.next();
        }
      );
  }

  // Add other methods as needed
}
