import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  componentType: string = 'available';
  toggleComponent(type: string) {
    this.componentType = type;
  }
}
