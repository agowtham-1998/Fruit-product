import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item-orange',
  templateUrl: './product-item-orange.component.html',
  styleUrls: ['./product-item-orange.component.css']
})
export class ProductItemOrangeComponent implements OnInit {
  public show:boolean = false;
  public buttonName:any = 'Show';
  stringJson: any;
  stringObject: any;
  fruitList = [
    {
      id: 4, name: 'Orange', cost: 25, availability: 0,details:'from Nagpur',category:'Premium'
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
