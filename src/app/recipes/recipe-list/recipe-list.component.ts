import {Component, OnDestroy, OnInit} from '@angular/core';

import {Recipe} from '../recipe.model';
import {RecipeService} from '../../services/recipe.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipes: Recipe[];

  private subscription: Subscription;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.subscription = this.recipeService.recipesChanged.subscribe(value => this.recipes = value);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
