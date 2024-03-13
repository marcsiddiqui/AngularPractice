import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lets begin';
  name = 'Ali Siddiqui';

  products = [
    { product:'Product1', quantity:1, price:500, total:0 },
    { product:'Product2', quantity:1, price:200, total:0 },
    { product:'Product3', quantity:1, price:200, total:0 },
    { product:'Product4', quantity:1, price:200, total:0 },
    { product:'Product5', quantity:1, price:200, total:0 },
    { product:'Product6', quantity:1, price:200, total:0 },
    { product:'Product7', quantity:1, price:200, total:0 },
    { product:'Product8', quantity:1, price:200, total:0 },
    { product:'Product9', quantity:1, price:200, total:0 },
    { product:'Product1', quantity:1, price:200, total:0 }
  ];

  users = [
    { fullname:'Ali Siddiqui', email:'ali@gmail.com', age:500, designation:'Developer', color:'#ff33ff' },
    { fullname:'Summiyal', email:'summiyal@gmail.com', age:500, designation:'Developer', color:'#ff6600' },
    { fullname:'Sana', email:'sana@gmail.com', age:500, designation:'Developer', color:'#00cc00' },
    { fullname:'Samiya', email:'samiya@gmail.com', age:500, designation:'Developer', color:'#006699' },
    { fullname:'Saad', email:'saad@gmail.com', age:500, designation:'Developer', color:'#999900' },
    { fullname:'Usman', email:'usman@gmail.com', age:500, designation:'Developer', color:'#666699' }
  ];
}
