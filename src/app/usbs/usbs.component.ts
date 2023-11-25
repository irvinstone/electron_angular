import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UsbService } from '../usb.service';
import { UsbModel } from '../usbModel';


@Component({
  selector: 'app-usbs',
  templateUrl: './usbs.component.html',
  styleUrls: ['./usbs.component.css']
})
export class UsbsComponent implements OnInit {

  devices: UsbModel[] = []


  constructor(private route: ActivatedRoute, public usbService: UsbService,  private location: Location) { }

  ngOnInit(): void {
    
  }

  async loadDevices() {
    this.devices = []
    await this.usbService.showDevices()
    this.usbService.devices.forEach(element => {
      this.devices.push({id:element.vendorId, name: element.productName})
    });
  }

  goBack(): void {
    this.location.back();
  }

}
