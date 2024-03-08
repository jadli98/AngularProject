import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  actions: Array<any> = [
    {
      title: 'Home',
      route: 'home',
      icon: 'house',
    },
    {
      title: 'products',
      route: 'products',
      icon: 'search',
    },
    {
      title: 'New Product',
      route: 'new-product',
      icon: 'save',
    },
  ];
  currentAction: any;
  setCurrentAction(action: any) {
    this.currentAction = action;
  }
}
