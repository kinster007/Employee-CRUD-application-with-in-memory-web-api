import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeFunctionalityService {
  private path = 'api/employees';

  constructor(private s1: HttpClient) {}

  getemp(): Observable<Employee[]> {
    return this.s1.get<Employee[]>(this.path);
  }
  getEmployee(id: number): Observable<Employee> {
    const url = `${this.path}/${id}`;
    return this.s1.get<Employee>(url);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.s1.post<Employee>(this.path, employee);
  }

  updateEmployee(employee: Employee): Observable<any> {
    return this.s1.put(this.path, employee);
  }

  deleteEmployee(employee: Employee | number): Observable<Employee> {
    const id = typeof employee === 'number' ? employee : employee.id;
    const url = `${this.path}/${id}`;
    return this.s1.delete<Employee>(url);
  }
}
