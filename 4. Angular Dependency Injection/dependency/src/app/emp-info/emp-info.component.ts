import { provideCloudflareLoader } from '@angular/common';
import { Component } from '@angular/core';
import { RecordsService } from '../records.service';


@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.css']
  // providers: [RecordsService]
})
export class EmpInfoComponent {
  infoReceived1: string[] = [];
  infoReceived2: string[] = [];
  infoReceived3: string[] = [];

  getInfoFromServiceClass1() {
    this.infoReceived1 = this.rservice.getinfo1();
  }

  getInfoFromServiceClass2() {
    this.infoReceived2 = this.rservice.getinfo2();
  }

  getInfoFromServiceClass3() {
    this.infoReceived3 = this.rservice.getinfo3();
  }
  
  constructor(private rservice: RecordsService) { }

  ngOnInit(): void {
  }

}
