import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  errorsMsg: Array<String> = [];

  ngOnInit(): void {
    document.body.className = 'hold-transition login-page';
  }
}
