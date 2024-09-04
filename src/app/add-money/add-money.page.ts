import { Component } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-money',
  templateUrl: './add-money.page.html',
  styleUrls: ['./add-money.page.scss'],
})
export class AddMoneyPage {
  amount!: number;
  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private navCtrl: NavController
  ) {}

  submit() {
    // Handle the submit logic
    if (this.amount) {
      console.log(`Amount to add: ${this.amount}`);
      // Add additional logic to handle the amount (e.g., updating the user's balance)
      this.modalController.dismiss({
        'amount': this.amount
      });
    }
  }
  async dismiss() {
    // Close the modal
    await this.modalController.dismiss();
  }
}
