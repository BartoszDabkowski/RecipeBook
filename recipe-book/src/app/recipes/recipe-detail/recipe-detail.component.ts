import { Router } from '@angular/router';
import { RecipeService } from './../recipe.service';
import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { Recipe } from "../recipe";
@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private recipeIndex: number;
  selectedRecipe: Recipe;

  constructor(private sls: ShoppingListService, 
              private route: ActivatedRoute,
              private recipesService: RecipeService,
              private router: Router){
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
          this.recipeIndex = params['id'];
          this.selectedRecipe = this.recipesService.getRecipe(this.recipeIndex);
      });
  }

  onAddToShoppingList(){
    this.sls.addItems(this.selectedRecipe.ingredients);
  }

  onEdit(){
    this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
  }

  onDelete(){
    this.recipesService.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['/router']);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
