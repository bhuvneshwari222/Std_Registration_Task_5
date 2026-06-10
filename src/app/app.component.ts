import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('stdForm') stdForm !: NgForm;

  onSubmit() {
    if (this.stdForm.invalid) {
      return this.stdForm.control.markAllAsTouched()
    }
    this.stdForm.resetForm()
  }
}
