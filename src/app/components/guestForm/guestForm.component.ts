import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

// For the GuestForm component:
// 		-The first input is a text input to add the guest's name.
// 		-The second input is a date input to add the guest's start date of the trip.
// 		-The third input is a date input to add the guest's end date of the trip.
// 		-Clicking on the "Add to Menu" button should reset all input fields.
// 		-The dates entered in the date picker are in YYYY-MM-DD format.

@Component({
  selector: 'guest-form',
  templateUrl: './guestForm.component.html',
  styleUrls: ['./guestForm.component.scss'],
})
export class GuestForm implements OnInit {
  @Output() onGuestAdded: EventEmitter<any> = new EventEmitter<any>();

  guestForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.guestForm = this.formBuilder.group({
      name: ['', { validators: [Validators.required] }],
      startDate: ['', { validators: [Validators.required] }],
      endDate: ['', { validators: [Validators.required] }],
    });
  }

  ngOnInit() {}
}

// Logic Task
// Set a blue border for the guest name input if the length of the 'Longest Substring Without Repeating Characters' number is odd, and set it to yellow if the length is even.

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
