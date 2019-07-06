import { Component, OnInit , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  @Output() public child2Event = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
 myData(value) {
   this.child2Event.emit(value);
 }
}
