import { Injectable } from '@angular/core';
import { Device } from 'usb';
import { UsbModel } from './usbModel';
declare type USB = typeof import("usb");
declare type WebUSB = typeof import("usb").webusb;


@Injectable({
  providedIn: 'root'
})
export class UsbService {
  private usb!: USB;
  private webUsb!: WebUSB;
  devices : USBDevice[] = []


  constructor() {
    if (window.require) {
      try {
        this.usb = window.require("usb").usb;
        const usb = window.require('usb');
        this.webUsb = new usb.WebUSB({
          allowAllDevices: true
        });
      } catch (e) {
        throw e;
      }
    } else {
      console.warn("usb was not loaded");
    }

    (async () => await this.showDevices())();
    
   }

  // getList(): UsbModel[] {
    
  //   this.webUsb.getDevices(){ data in
  //   }
  //   this.devices = (async () => await this.webUsb.getDeviceList())();
  //   const usbs: UsbModel[] = [];
  //   this.devices.forEach(element => {
  //     usbs.push({id: element.busNumber, name: element.deviceAddress})
  //   });
  //   return usbs;
  // }

  // getList2(): UsbModel[] {
  //   this.devices = this.usb.getDeviceList();
  //   const usbs: UsbModel[] = [];
  //   this.devices.forEach(element => {
  //     usbs.push({id: element.busNumber, name: element.deviceAddress})
  //   });
  //   return usbs;
  // }

  showDevices = async () => {
    const usb = window.require('usb');
    let webus = new usb.WebUSB({
      allowAllDevices: true
    });
    const devices = await webus.getDevices();
    this.devices = devices

    // const text = devices.map((d: { productName: any; productId: any; serialNumber: any; }) => `${d.productName}\t${d.productId}\t${d.serialNumber || '<no serial>'}`);
    // text.unshift('VID\tPID\tSerial\n-------------------------------------');
    

    // console.log(text);
};
}
