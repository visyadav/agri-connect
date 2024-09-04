import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef;
  user = {
    name: 'Jeet Yadu',
    mobileNumber: '+1234567890',
    email: 'jeet.yadu@example.com',
    address: '123 Main St, Anytown, India',
  };
  profilePhoto = 'assets/images/farmer-image-list/avtars/user-avtar.png'
  constructor() {}

  ngOnInit() { }

  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Handle the file upload or update the profile photo
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profilePhoto = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
