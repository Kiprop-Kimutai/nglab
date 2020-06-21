import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({providedIn: 'root'})
export class UserService {
    constructor() {}
    getUsers() {
        return MOCK_USERS;
    }
    testObservableFunction(): Observable<any> {
        return of(1);
    }
    async testPromiseFunction() {
        return 'some async value';
    }
}
export interface User {
    firstname: string;
    lastname: string;
    department: string;
    state: string;
}
export const MOCK_USERS = [
    {firstname: "Jonaha", lastname: "Kiprop", department: "IT", state: "EMC"},
    {firstname: "Jonaha", lastname: "Kiprop", department: "IT", state: "EMC"},
    {firstname: "Jonaha", lastname: "Kiprop", department: "IT", state: "EMC"}
];
