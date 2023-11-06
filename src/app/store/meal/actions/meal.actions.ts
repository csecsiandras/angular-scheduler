import { createAction, props } from '@ngrx/store';

const actionPrefix = '[Meal]';

export interface SetLoading {
  readonly isLoading: boolean;
}

export const setLoading = createAction(
  `${actionPrefix} Set Loading`,
  props<SetLoading>()
);

export const getMeal = createAction(`${actionPrefix} Get words`);

// TODO:
export const storeMeal = createAction(`${actionPrefix} store Meal`);
