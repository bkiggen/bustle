import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() childShow;
  @Output() clickSender = new EventEmitter();

  constructor() { }

  hamburgerClicked() {
    this.clickSender.emit();
  };

  ngOnInit() {
  }

}
