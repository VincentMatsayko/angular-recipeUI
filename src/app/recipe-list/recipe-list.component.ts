import { Component, OnInit } from '@angular/core';
import { Recipe } from '../service/model/recipe';
import { RecipeService } from '../service/recipe/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipeService.findAll().subscribe(resp => {
      this.recipes = resp;
    });
  }
}