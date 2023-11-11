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

// Logic Task
// Set a blue background for the row that contains the guest name of the Longest Substring Without Repeating Characters.

// 		Example 1:
// 		Input: s = "Anna"
// 		Output: 2
// 		Explanation: The answer is "An", with the length of 2.

// 		Example 2:
// 		Input: s = "bbbbb"
// 		Output: 1
// 		Explanation: The answer is "b", with the length of 1.

// 		Example 3:
// 		Input: s = "pwwkew"
// 		Output: 3
// 		Explanation: The answer is "wke", with the length of 3.
// 		Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

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
