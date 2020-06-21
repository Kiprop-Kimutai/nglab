import { Injectable } from '@angular/core';
import { HelperService } from './helper.service';
@Injectable({providedIn: 'root'})
export class MasterService {
    constructor(private helperService: HelperService ) {}

    HelpMe() {
        return this.helperService.getHelpers();
    }
}