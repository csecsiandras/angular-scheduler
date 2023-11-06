import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getMeal, storeMeal } from '../actions/meal.actions';
import { MealService } from '../../../services/meal.service';

@Injectable()
export class MealEffects {
  getMeal$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getMeal),
      switchMap(() => this.mealService.readDB()),
      map((response: string[]) => {
        return storeMeal();
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly store: Store,
    private readonly router: Router,
    private readonly mealService: MealService
  ) {}
}
