import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  searchText: any;

  fruitList = [
    {
      id: 1, name: 'Apple', cost: 30, availability: 1,details:'Imported from Swiss',category:'Premium'
    }
  ];

  filteredList = [];

  constructor() { }

  ngOnInit() {

    this.filterByCategory('root')

  }
  
  filterByCategory(categoryId){
    this.filteredList = this.fruitList.filter(fruit => fruit.category == categoryId)
}

}
