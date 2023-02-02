import { Component, enableProdMode } from '@angular/core';
import { DataService } from '../data.service'; 

@Component({
  selector: 'app-e-info',
  templateUrl: './e-info.component.html',
  styleUrls: ['./e-info.component.css'],
  providers: [DataService]
})
export class EInfoComponent {
  infoReceived1: string[]=[];
  infoReceived2: string[]=[];
  infoReceived3: string[]=[];

  getInfoFromService1() { 
    this.infoReceived1 = this.dservice.getInfo1()
  }
  getInfoFromService2() {
    this.infoReceived2 = this.dservice.getInfo2()
   }

  getInfoFromService3() {
    this.infoReceived3 = this.dservice.getInfo3()
   }

  constructor(private dservice:DataService) {

  }

  updateInfo(frm: any){
    //Updates records.
    this.dservice.addInfo(frm.value.location)
  }

}
enableProdMode();