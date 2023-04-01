import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  ngOnInit(): void {
    document.body.className = 'hold-transition skin-red sidebar-mini';
  }
}
