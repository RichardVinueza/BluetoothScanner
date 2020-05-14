import { Component, NgZone } from "@angular/core";
import { BLE } from "@ionic-native/ble/ngx";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  devices: any[] = [];
  deviceNum: number;

  constructor(private ble: BLE, private ngZone: NgZone) {}

  ionViewDidEnter(){
    this.Scan()
  }

  Scan() {
    this.devices = [];
    this.ble.startScan([]).subscribe((device) => {
      console.log("Discovered" + JSON.stringify(device, null, 2));
      this.ngZone.run(() => {
        this.deviceNum = this.devices.push(device);
        //console.log(device)
        console.log("DEVICES: " + JSON.stringify(this.devices, null, 2));
      });
    });
  }

  // onDeviceDiscovered(device) {
  //   console.log("Discovered" + JSON.stringify(device, null, 2));
  //   this.ngZone.run(() => {
  //     this.devices.push(device);
  //     //console.log(device)
  //     console.log("DEVICES: " + JSON.stringify(this.devices, null, 2));
  //   });
  // }
}
