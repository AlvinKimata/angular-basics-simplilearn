import { Component, NgModule } from '@angular/core';
import { DemoComponent } from './demo/demo.component';
import { AppRoutingModule } from './app-routing.module';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng_directive';
}
