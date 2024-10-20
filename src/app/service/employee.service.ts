import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, DocumentReference, DocumentData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private firestore: Firestore = inject(Firestore);
  private employeeCollection = collection(this.firestore, 'employees');

  getEmployees(): Observable<Employee[]> {
    return collectionData(this.employeeCollection, { idField: 'id' }) as Observable<Employee[]>;
  }

  addEmployee(employee: Employee): Promise<DocumentReference<DocumentData>> {
    const employeeData: DocumentData = {
      name: employee.name,
      dateOfBirth: employee.dateOfBirth,
      city: employee.city,
      salary: employee.salary,
      gender: employee.gender,
      email: employee.email
    };
    
    return addDoc(this.employeeCollection, employeeData);
  }
}
