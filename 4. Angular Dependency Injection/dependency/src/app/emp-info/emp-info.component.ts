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

  constructor(private rservice: RecordsService) { }

  ngOnInit(): void {
  }

}
