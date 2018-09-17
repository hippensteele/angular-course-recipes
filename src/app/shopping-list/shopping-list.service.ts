import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];
    ingredientsUpdated = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    
    getIngredients(){
        return this.ingredients.slice();
    }
    
    getIngredient(index: number){
        return this.ingredients[index];
    }
    
    addIngredient(ingredient: Ingredient){
        let existingItem =  this.ingredients.find(x => x.name == ingredient.name);
        if (existingItem){
            existingItem.amount += ingredient.amount;
        } else {
            this.ingredients.push(new Ingredient(ingredient.name, ingredient.amount));
        }
        this.ingredientsUpdated.next(this.ingredients.slice());
    }
    
    updateIngredient(index: number, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient; 
        this.ingredientsUpdated.next(this.ingredients.slice());
    }
    
    removeIngredient(index: number){
        this.ingredients.splice(index, 1);
        this.ingredientsUpdated.next(this.ingredients.slice());
    }
    
}