import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeFunctionalityService } from '../employee-functionality.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
  employees: Employee[];

  constructor(
    private employeeService: EmployeeFunctionalityService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.delete();
    setTimeout(() => {
      this.router.navigate(['/employees']);
    });
  }

  delete(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.employeeService.deleteEmployee(id).subscribe();
  }
}
