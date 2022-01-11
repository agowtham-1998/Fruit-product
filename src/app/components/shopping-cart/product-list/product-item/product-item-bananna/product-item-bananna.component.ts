import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item-bananna',
  templateUrl: './product-item-bananna.component.html',
  styleUrls: ['./product-item-bananna.component.css']
})
export class ProductItemBanannaComponent implements OnInit {

  public show:boolean = false;
  public buttonName:any = 'Show';
  stringJson: any;
  stringObject: any;
  fruitList = [ 
    {
      id: 3, name: 'Bananna', cost: 5, availability: 0
    }
  ];

  constructor() { }

  ngOnInit() {

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
