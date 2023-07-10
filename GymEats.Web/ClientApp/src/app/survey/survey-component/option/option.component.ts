import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent {
  option!: FormGroup;

  ngOnInit() {
      this.option = new FormGroup({
        label: new FormControl<string | null>(null),
        isExclusive: new FormControl<string | null>(null)
      });
  }
}
