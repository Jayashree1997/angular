import { Component, OnInit , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  @Output() public component2Event = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }
  getMessage(value) {
    this.component2Event.emit(value);
  }

}
