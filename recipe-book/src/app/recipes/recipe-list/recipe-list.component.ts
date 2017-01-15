import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe }  from '../recipe';
@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
  new Recipe('Hamburger', 'Very Tasty', 'http://assets.historyhole.com/wp-content/uploads/2016/07/05010901/hamburger-iStock_000008300965_Medium-1024x780_br5vtp.jpg',[]),    
  new Recipe('HotDog', 'Delicious', 'http://www.berksfoods.com/wp-content/uploads/2014/02/ph_home_1.png',[])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  
  constructor() {}
  ngOnInit() {}
  onSelected(recipe : Recipe){
    this.recipeSelected.emit(recipe);
  }
}
