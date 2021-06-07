import { Component, OnInit } from '@angular/core';
import models from './data/agency.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
// tslint:disable: typedef
export class AppComponent implements OnInit {
  mode: 'card' | 'list' = 'card';
  items = [];

  ngOnInit() {
    this.items = models;
  }

  // tslint:disable-next-line: typedef
  changeMode() {
    this.mode = this.mode === 'card' ? 'list' : 'card';
  }
}
