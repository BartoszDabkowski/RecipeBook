import { Recipe } from './recipe';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeService {
private recipes: Recipe[] = [
  new Recipe('Hamburger', 'Very Tasty', 'http://assets.historyhole.com/wp-content/uploads/2016/07/05010901/hamburger-iStock_000008300965_Medium-1024x780_br5vtp.jpg',[]),    
  new Recipe('HotDog', 'Delicious', 'http://www.berksfoods.com/wp-content/uploads/2014/02/ph_home_1.png',[])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }
}
