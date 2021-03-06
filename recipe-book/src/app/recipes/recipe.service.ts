import { Ingredient } from './../shared/ingredient';
import { Recipe } from './recipe';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeService {
private recipes: Recipe[] = [
  new Recipe('Hamburger', 'Very Tasty', 'http://assets.historyhole.com/wp-content/uploads/2016/07/05010901/hamburger-iStock_000008300965_Medium-1024x780_br5vtp.jpg',[
    new Ingredient('Bun', 2),
    new Ingredient('Patty', 1),
    new Ingredient('Lettace', 1),
    new Ingredient('Tomato Slice', 3)
  ]),    
  new Recipe('HotDog', 'Delicious', 'http://parade.com/wp-content/uploads/2013/07/hot-dog-ftr.jpg',[
    new Ingredient('Bun', 1),
    new Ingredient('Hotdog', 1),
    new Ingredient('Relish', 2),
    new Ingredient('Onions', 2)
  ])
  ];

  constructor() { }


  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }
}
