import { Component, OnInit} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddMoneyPage } from '../add-money/add-money.page';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit  {
  user = {
    fullName: 'Jeet Yadu',
    bankName: 'ICICI BANK',
    amount: 100000
  };
  constructor(private modalController: ModalController) { }
  ngOnInit() {}

  async openAddMoneyModal() {
    const modal = await this.modalController.create({
      component: AddMoneyPage,
      cssClass: 'my-custom-class'
    });

    modal.onDidDismiss().then((result) => {
      if (result.data && result.data.amount) {
        this.user.amount += result.data.amount; // Update the amount with the new value
      }
    });

    return await modal.present();
  }
}
