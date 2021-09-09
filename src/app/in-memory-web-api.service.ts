import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const employees = [
      {
        id: 1,
        name: 'Jayesh',
        location: 'Bangalore',
        email: 'jjain@gmail.com',
        mobile: '7777777777'
      },
      {
        id: 2,
        name: 'Rakshit',
        location: 'Pune',
        email: 'abc@xyz.com',
        mobile: '3030303030'
      },
      {
        id: 3,
        name: 'Lokesh',
        location: 'Delhi',
        email: 'lok@gmail.com',
        mobile: '0123456789'
      }
    ];
    return { employees };
  }
  genId(emp: Employee[]): number {
    return emp.length > 0 ? Math.max(...emp.map(emp => emp.id)) + 1 : 1;
  }
}
