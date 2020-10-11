import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  @Input() message: string;
  @Output() closeAlert = new EventEmitter<void>();

  onClose() {
    this.closeAlert.emit();
  }
}
