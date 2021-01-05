import { Component, OnInit } from '@angular/core';
import { DocDashboard } from '../doc-dashboard';
import { DocDashboardService } from '../doc-dashboard.service';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-doc-dashboard',
  templateUrl: './doc-dashboard.component.html',
  styleUrls: ['./doc-dashboard.component.css']
})
  
export class DocDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}





// export class DocDashboardComponent implements OnInit {
  // docDashboard: DocDashboardComponent;
  // doctors = [];
  // constructor() { }
  // http;

  // constructor(private docDashboardService: DocDashboardService, http:HttpClient) {
  //   this.http = http;
  // }


  // ngOnInit(): void {
  //   this.docDashboardService.getDoctorList().subscribe((res: Response) => {
  //     console.log(res['doctor_set'])
  //     Object.entries(res['doctor_set']).forEach(result => {
  //     const [_, value] = result;
  //       let name = value['doctorName'];
  //       let photo = value['photo'];
  //       let user = value['user'];
  //       let email = value['businessEmail'];
  //       let doctorObject = new doctor(name,photo,user,email)
  //       this.doctors.push(doctorObject)
  //     });
  //   });
  // }
  // }








