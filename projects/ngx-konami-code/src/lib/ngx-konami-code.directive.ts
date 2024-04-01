import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[konamicode]',
  standalone: false
})
export class NgxKonamiCodeDirective {

  @Output()
  private konamicode: EventEmitter<void>;
  private konamiCodeSequence: string[];
  private MySequence: string[];

  constructor() {
    this.konamicode = new EventEmitter<void>();
    this.MySequence = [];
    this.konamiCodeSequence = ['arrowup', 'arrowup', 'arrowdown', 'arrowdown', 'arrowleft', 'arrowright', 'arrowleft', 'arrowright', 'b', 'a'];
  }
  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key) {
      this.MySequence.push(event.key.toLowerCase());
      if (this.MySequence.length > this.konamiCodeSequence.length) {
        this.MySequence.shift();
      }
      if (this.isKonamiCode()) {
        this.konamicode.emit();
      }
    }
  }
  isKonamiCode(): boolean {
    return this.konamiCodeSequence.every((code: string, index: number) => code === this.MySequence[index]);
  }
}
