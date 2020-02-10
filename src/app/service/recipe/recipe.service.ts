import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../model/recipe';

@Injectable()
export class RecipeService {

  private recipeUrl: string;

    constructor(private http: HttpClient) {
        this.recipeUrl = 'http://localhost:8080/recipe';
    }

    public findAll(): Observable<Recipe[]> {
        return this.http.get<Recipe[]>(this.recipeUrl);
    }
}