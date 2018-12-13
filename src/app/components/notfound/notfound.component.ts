import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {

  constructor(private _route: Router) { }

  ngOnInit() {
  }
  navigateTowelcome() {
    this._route.navigateByUrl('/welcome');
  }

}
