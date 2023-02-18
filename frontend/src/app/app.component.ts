import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front';
  constructor(private router: Router){
  }
  categoryPage(){
    this.router.navigate(['/category']);

  }
  productPage(){
    this.router.navigate(['/product']);
  }
}
