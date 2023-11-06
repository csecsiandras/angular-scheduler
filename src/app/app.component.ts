import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { setLoading } from './store/meal/actions/meal.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Hotel Meal Schedule';

  onGuestAdded(guest: any) {
    this.store.dispatch(setLoading({ isLoading: true }));
  }

  constructor(private readonly store: Store) {}
}

export interface Guest {
  name: string;
  startDate: string;
  endDate: string;
}
