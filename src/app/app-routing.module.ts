import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';

const appRoutes: Routes =  [
  {path: 'recipes', component: RecipesComponent, children: [
      {path: ':name', component: RecipeDetailComponent}
    ]},
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: '**', redirectTo: 'recipes'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
