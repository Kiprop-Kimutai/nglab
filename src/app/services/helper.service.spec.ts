import { HelperService } from './helper.service';

describe('HelperService', () => {
    let service: HelperService;
    beforeEach(() => service = new HelperService());

    it('#getHelpers should lender help', () => {
        expect(service.getHelpers()).toBe('Getting you some help!');
    });
})