import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeFunctionalityService } from '../employee-functionality.service';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employees: Employee[] = [];
  employee: Employee;


  constructor(
    private employeeService: EmployeeFunctionalityService,
    private router: Router
  ) {}


  signupForm: FormGroup;
  locationList: string[];


  ngOnInit() {

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

        location: new FormControl('', Validators.required),
      })
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

  get location() {
    return this.signupForm.get('location');
  }

  onFormSubmit(employee): void {
    this.employeeService
      .addEmployee(employee as Employee)
      .subscribe(employee => {
        this.employees.push(employee);
      });
    this.router.navigate(['/employees']);
  }
}
