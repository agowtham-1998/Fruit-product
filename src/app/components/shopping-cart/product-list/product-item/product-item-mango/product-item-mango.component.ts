import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item-mango',
  templateUrl: './product-item-mango.component.html',
  styleUrls: ['./product-item-mango.component.css']
})
export class ProductItemMangoComponent implements OnInit {

  public show:boolean = false;
  public buttonName:any = 'Show';

  stringJson: any;
  stringObject: any;
  fruitList = [
    {
      id: 2, name: 'Mango', cost: 50, availability: 1,details:'Farmed at Selam',category:'Tamilnadu'
    },
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
