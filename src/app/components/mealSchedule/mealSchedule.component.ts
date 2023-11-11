import { Component, Input, OnInit } from '@angular/core';

// For the Meal Scheduler component:
// 		-During their stay, each hotel guest gets three meals per day: breakfast, lunch, and dinner.
// 		-The final meal schedule is displayed in a table with <tbody data-test-id="meal-schedule"></tbody>.
// 		-For each booked date, the schedule is rendered as a separate row <tr>. The table rows should be sorted by date.
// 		-For each booked date, render four columns: date, breakfast, lunch, and dinner.
// 		-The first column <td data-test-id="date"> renders the respective date.
// 		-The second column <ul date-test-id="breakfast-list"> renders the list of guests staying on this date who will have breakfast in the order they were added, where each guest name is rendered as a list item <li>.
// 		-The third column <ul data-test-id="lunch-list"> renders the list of guests staying on this date who will have lunch in the order they were added, where each guest name is rendered as a list item <li>.
// 		-The fourth column <ul data-test-id="dinner-list"> renders the list of guests staying on this date who will have dinner in the order they were added, where each guest name is rendered as a list item <li>.
// 		-Please note that all dates between start and end dates are considered dates for stay.
// 		-You can assume that start and end dates will always be in the same month.

@Component({
  selector: 'meal-schedule',
  templateUrl: './mealSchedule.component.html',
  styleUrls: ['./mealSchedule.component.scss'],
})
export class MealSchedule implements OnInit {
  guestList: any;

  constructor() {}

  ngOnInit() {}
}
