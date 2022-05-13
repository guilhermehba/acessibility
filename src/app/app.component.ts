import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'acess';
  public form: FormGroup;
  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      yesNoAnswer: ['no'],
    });
  }
  submit() {
    console.log(this.form.value);

  }
}
