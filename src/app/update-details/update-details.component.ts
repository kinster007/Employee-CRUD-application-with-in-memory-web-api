import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { Employee } from '../employee';
import { EmployeeFunctionalityService } from '../employee-functionality.service';
import {Location} from '@angular/common';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {

  @Input() employee: Employee;
 
  constructor(private route: ActivatedRoute,
    private employeeService: EmployeeFunctionalityService,
    private location: Location) { }

    signupForm: FormGroup;
    locationList: string[];

  ngOnInit(): void {
    this.locationList = ['Bikaner', 'Jalandhar', 'Work from Home','Choose not to say'];

    this.signupForm = new FormGroup({

      name: new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-Za-z]\\w{5,29}$')
      ]),

      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')
      ]),

      mobile: new FormControl('', [
        Validators.required,
        Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")
      ]),

      area: new FormControl('', Validators.required),

      });
    this.getEmployee();
  }

  get name() {
    return this.signupForm.get('name');
  }

  get email() {
    return this.signupForm.get('email');
  }

  get mobile() {
    return this.signupForm.get('mobile');
  }

  get area() {
    return this.signupForm.get('area');
  }

  getEmployee(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.employeeService.getEmployee(id)
      .subscribe(employee => this.employee = employee);
  }
  save(): void {
    this.employeeService.updateEmployee(this.employee)
      .subscribe(() => this.location.back() );
   
  }
 
}