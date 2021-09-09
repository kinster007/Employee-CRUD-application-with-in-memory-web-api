import { Component, OnInit, VERSION } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeFunctionalityService } from '../employee-functionality.service';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html'
  //styleUrls: ['./app.component.css']
})
export class DisplayData implements OnInit {
  searchemp: string;
  employee: Employee[];

  constructor(private employeeService: EmployeeFunctionalityService) {}

  ngOnInit() {
    this.getEmp();
  }
  getEmp(): void {
    this.employeeService.getemp().subscribe(employee => {
      this.employee = employee;
    });
  }
}
