import { Component, OnInit }        from '@angular/core';
import { FormBuilder, Validators }  from '@angular/forms';


@Component({
  selector: 'my-search-form',
  templateUrl: './search.form.html'
})

export class SearchFormComponent implements OnInit {

  private form: any;

  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.builder.group({
      'search': ['', Validators.required]
    });
  }

  search() {
    if (this.form.dirty && this.form.valid) {
      alert(`Name: ${this.form.value.email}`);
    }
  }
}
