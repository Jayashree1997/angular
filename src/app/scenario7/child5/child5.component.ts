import { Component, OnInit } from '@angular/core';
import { Scenario7serviceService } from '../scenario7service.service';

@Component({
  selector: 'app-child5',
  templateUrl: './child5.component.html',
  styleUrls: ['./child5.component.css']
})
export class Child5Component implements OnInit {

  constructor(private siblingService: Scenario7serviceService) { }
  formChild4: any;

  ngOnInit() {
    this.siblingService.message.subscribe(data => {
      this.formChild4 = data;
    });
  }

}
