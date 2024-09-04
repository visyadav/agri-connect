import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  users = [
    {
      name: 'Yadav Ji',
      profilePhoto: 'assets/images/farmer-image-list/arhar-dal.jpg',
      price: '3000',
      location: 'Crossing Republik, Ghaziabad'
    },
    {
      name: 'Durgesh Thakur',
      profilePhoto: 'assets/images/farmer-image-list/fresh-wheat-crop.jpg',
      price: '2500',
      location: 'Sector 62, Noida'
    },
    {
      name: 'Chetan Pratap Singh',
      profilePhoto: 'assets/images/farmer-image-list/rice-image.jpeg',
      price: '2000',
      location: 'Vijay Nagar, Ghaziabad'
    },
    {
      name: 'Abhishek Rai',
      profilePhoto: 'assets/images/farmer-image-list/wheat-image-2.jpeg',
      price: '3500',
      location: 'Lal Kuan, Ghaziabad'
    },
    {
      name: 'Aniket Chaudhary',
      profilePhoto: 'assets/images/farmer-image-list/rice-image.jpeg',
      price: '1500',
      location: 'Gaur City, Noida'
    },
    {
      name: 'Golu',
      profilePhoto: 'assets/images/farmer-image-list/rice-image.jpeg',
      price: '3500',
      location: 'Chipyana, Ghaziabad'
    },
    {
      name: 'Aatha Tiwari',
      profilePhoto: 'assets/images/farmer-image-list/wheat-image-2.jpeg',
      price: '3500',
      location: 'Char Murti, Ghaziabad'
    },
    {
      name: 'Gaurav Singh',
      profilePhoto: 'assets/images/farmer-image-list/fresh-wheat-crop.jpg',
      price: '3500',
      location: 'Mohan Nagar, Ghaziabad'
    },
    {
      name: 'Himanshu Thakur',
      profilePhoto: 'assets/images/farmer-image-list/wheat-image-2.jpeg',
      price: '3500',
      location: 'Sector 42, Ghaziabad'
    }
    // Add more users here
  ];
  constructor(private navCtrl: NavController, private router: Router, private alertController: AlertController) {}

  viewDetails(user: any){
    this.router.navigate(['/user-details'], {state:{ user: user}});
  }

  async presentFeedbackAlert() {
    const alert = await this.alertController.create({
      header: 'Feedback Box',
      message: 'Your small feedback will be appreciated. If this is not good, please suggest any improvements you would like.',
      inputs: [
        {
          name: 'feedback',
          type: 'textarea',
          placeholder: 'Enter your feedback here...',
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Submit',
          handler: (data) => {
            if (data.feedback.trim()) {
              this.submitFeedback(data.feedback);
            }
          }
        }
      ]
    });

    await alert.present();
  }

  async submitFeedback(feedback: string) {
    // Logic to handle feedback submission, e.g., send it to a server
    const successAlert = await this.alertController.create({
      header: 'Feedback Received',
      message: `Thank you for your feedback! We appreciate your input.`,
      buttons: ['OK']
    });

    await successAlert.present();
  }
}
