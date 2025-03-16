import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular'; 
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'], 
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
})
export class HomePage {
  activity: string = '';
  price: number = 0;
  type: string = '';
  bookingRequired: boolean = false;
  accessibility: number = 0.5;

  types: string[] = ['Education', 'Recreational', 'Social', 'DIY', 'Charity', 'Cooking', 'Relaxation', 'Music', 'Busywork'];

  submittedData: any[] = [];

  constructor() {}

  // To load data from localStorage when the page is initialized
  ngOnInit() {
    const savedData = localStorage.getItem('submittedData');
    if (savedData) {
      this.submittedData = JSON.parse(savedData);
    }
  }

  // Submit Button Onclick
  onSubmit() {
    this.submittedData.push({
      activity: this.activity,
      price: this.price,
      type: this.type,
      bookingRequired: this.bookingRequired,
      accessibility: this.accessibility,
    });

    localStorage.setItem('submittedData', JSON.stringify(this.submittedData));

    console.log('Form submitted with values: ', this.submittedData);

    // Reset form fields after submission
    this.activity = '';
    this.price = 0;
    this.type = '';
    this.bookingRequired = false;
    this.accessibility = 0.5;
  }

  deleteData(index: number) {
    this.submittedData.splice(index, 1);
    localStorage.setItem('submittedData', JSON.stringify(this.submittedData));
  }

  // Check if the submit button should be disabled
  isSubmitDisabled(): boolean {
    return !this.activity || this.price <= 0 || !this.type;
  }
}
