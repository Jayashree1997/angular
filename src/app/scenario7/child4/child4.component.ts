import { Component, OnInit } from '@angular/core';
import { Scenario7serviceService } from '../scenario7service.service';

@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.css']
})
export class Child4Component implements OnInit {

  constructor(private siblingService: Scenario7serviceService ) { }

  ngOnInit() {
  }
  sendMessage(data) {
    this.siblingService.message.next(data);
  }

}
