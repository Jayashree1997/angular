import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {
  @Input() message: string;

  constructor() { }

  ngOnInit() {
  }

}
