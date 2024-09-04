import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {

  user: any;
  constructor(private router: Router, private alertController: AlertController) {
    // Access the navigation state to get the passed user data
    const navigation = this.router.getCurrentNavigation();
    this.user = navigation?.extras.state?.['user'];
  }

  ngOnInit() {
  }
  async presentBidAlert() {
    const alert = await this.alertController.create({
      header: 'Your Bid',
      inputs: [
        {
          name: 'amount',
          type: 'number',
          placeholder: 'Enter your bid amount',
          min: 0
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
            this.submitBid(data.amount);
          }
        }
      ]
    });

    await alert.present();
  }

  async submitBid(amount: number) {
    // Logic to handle the bid submission, such as sending it to a server

    const alert = await this.alertController.create({
      header: 'Success',
      message: `Your bid of ₹${amount} has been successfully submitted.`,
      buttons: ['OK']
    });

    await alert.present();
  }


  async presentPaymentAlert() {
    const totalAmount = this.user.price; // Total amount for the product
    const requiredDeposit = totalAmount * 0.20; // 20% of the total amount

    const alert = await this.alertController.create({
      header: 'Payment Required',
      message: `Total Amount: ₹${totalAmount} Please pay 20% of the total amount (₹${requiredDeposit}) first.`,
      inputs: [
        {
          name: 'paymentAmount',
          type: 'number',
          placeholder: 'Enter payment amount',
          min: requiredDeposit // Minimum amount to be entered
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Pay',
          handler: (data) => {
            const paymentAmount = parseFloat(data.paymentAmount);
            if (paymentAmount >= requiredDeposit) {
              this.showPaymentSuccessAlert();
            } else {
              this.showPaymentFailureAlert();
            }
          }
        }
      ]
    });

    await alert.present();
  }

  async showPaymentSuccessAlert() {
    const alert = await this.alertController.create({
      header: 'Payment Success',
      message: 'Your payment has been successfully processed.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async showPaymentFailureAlert() {
    const alert = await this.alertController.create({
      header: 'Payment Failed',
      message: 'Insufficient payment amount. Please try again.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
