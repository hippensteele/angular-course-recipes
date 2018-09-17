import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  
  constructor(private shoppinglistService:ShoppingListService,
              private route: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => { 
        this.recipe = this.recipeService.getRecipe(+params['id']);
        this.id = +params['id'];
      }
      );
  }
  
  addToShoppingList(){
    for (let ingredient of this.recipe.ingredients){
      this.shoppinglistService.addIngredient(ingredient);
    }
  }
  
  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}
