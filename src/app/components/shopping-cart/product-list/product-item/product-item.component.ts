import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  public show:boolean = false;
  public buttonName:any = 'Show';
 
  stringJson: any;
  stringObject: any;
  fruitList = [
    {
      id: 1, name: 'Apple', cost: 30, availability: 1,details:'Imported from Swiss',category:'Premium'
    }
  ];

  constructor( private route: ActivatedRoute,
    private cartService:CartService) { }

  ngOnInit() {

  }
   addToCart(item) {
    // window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(item);
  }
  viewDetails(){

    this.stringJson = JSON.stringify(this.fruitList);
    console.log("String json object :", this.stringJson);
    console.log("Type :", typeof this.stringJson);

  
    this.stringObject = JSON.parse(this.stringJson);
    console.log("JSON object -", this.stringObject);

    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";

  }

}
