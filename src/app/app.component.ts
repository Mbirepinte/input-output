import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'input-output';

  public onomatopoeia: string[] = ["Meow","waouf"];

  onReceiveNewOnomatopoeia(value: any) :void {
    console.log("coucou")
    this.onomatopoeia.push(value);
  }
}
