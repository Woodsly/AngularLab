import { Component } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chirpus Pizza';
  Menu:MenuItem[] = [
    {ItemName: "BBQ Chicken Pizza",
    Category: "Pizza",
    Price:12.99},
    {
      ItemName: "Cheese Pizza",
      Category: "Pizza",
      Price: 7.99
    },
    {
      ItemName: "Penne Pasta Bake",
      Category: "Entree",
      Price: 6.99
    },
    {
      ItemName: "Lasagna",
      Category: "Entree",
      Price: 6.99
    },
    {
      ItemName: "Mega Chocolate Chip Cookie",
      Category: "Dessert",
      Price: 1.99
    },
    {
      ItemName: "Ice Cream Cake",
      Category: "Dessert",
      Price: 9.99
    },
  ]
}
