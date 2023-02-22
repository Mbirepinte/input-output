import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-createOnomatopeia',
  templateUrl: './createOnomatopeia.component.html',
  styleUrls: ['./createOnomatopeia.component.css']
})
export class CreateOnomatopeiaComponent implements OnInit {

  public newOnomatopoeia: string = "";
  @Output() newOnomatopoeiaEvent:EventEmitter<string> = new EventEmitter<string>();  

  createOnomatopoeia() :void {
    this.newOnomatopoeiaEvent.emit(this.newOnomatopoeia);
  }
  constructor() { }

  ngOnInit() {
  }

}
