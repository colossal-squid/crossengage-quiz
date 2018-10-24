import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  private console: any;

  constructor(@Inject('WINDOW') window: Window) {
    this.console = window.console;
  }

  public warn(message: string) {
    this.console.warn(message);
  }

  public info(message: string) {
    this.console.log(message);
  }
}
