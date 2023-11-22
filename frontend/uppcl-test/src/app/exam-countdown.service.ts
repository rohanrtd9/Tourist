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
  private readonly storageKey = 'countdown_timer';
  private duration: number=1800;

  initDuration(duration: number): void {
    this.duration = duration;
    localStorage.setItem(this.storageKey, JSON.stringify({ duration, remainingTime: duration }));
    this.countdownSource.next(duration);
  }

  startTimer(): void {
    const timerId = setInterval(() => {
      const storedData = localStorage.getItem(this.storageKey);
      if (storedData) {
        const { remainingTime } = JSON.parse(storedData);
        if (remainingTime > 0) {
          localStorage.setItem(this.storageKey, JSON.stringify({ duration: this.duration, remainingTime: remainingTime - 1 }));
          this.countdownSource.next(remainingTime - 1);
        } else {
          clearInterval(timerId);
          this.timerCompleteSource.next();
        }
      }
    }, 1000);
  }
  startTimerFromTime(duration: number): void {
    this.initDuration(duration);
    this.startTimer();
  }
  // Add other methods as needed
}
