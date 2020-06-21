import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class HelperService {
    constructor() {}
    getHelpers() {
        return 'Getting you some help!';
    }
}
