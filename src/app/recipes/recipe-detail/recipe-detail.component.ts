import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ShoppingListService} from '../../services/shopping-list.service';
import {ActivatedRoute, Params} from '@angular/router';
import {RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;

  constructor(private recipeService: RecipeService,
              private shoppingListService: ShoppingListService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => this.recipe = this.recipeService.getByName(params['name'])
    );
  }

  addIngredientsToShoppingList() {
    if (this.recipe) {
      this.shoppingListService.addIngredients(this.recipe.ingredients);
    }
  }
}
