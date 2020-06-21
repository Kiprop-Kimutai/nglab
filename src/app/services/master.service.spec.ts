import { MasterService } from './master.service';
import { HelperService } from './helper.service';

describe('MasterService', () => {
    let service: MasterService;
    //beforeEach(() => service = new MasterService(new HelperService()));

    it('HelpMe should help me!', () => {
        service = new MasterService(new HelperService());
        expect(service.HelpMe()).toBe('Getting you some help!');
    });

    it('HelpMe should return fake help from a fake helper', () => {
        const fake = {getHelpers : () => 'Fake help!'};
        let service = new MasterService(fake as HelperService);
        expect(service.HelpMe()).toBe('Fake help!');
    });

    it('HelpMe should return lame help from lame helper', () => {
        const lame = {getHelpers: () => 'Lame help'};
        service = new MasterService(lame as HelperService);
        expect(service.HelpMe()).toBe('Lame help');
    });

    it('HelpMe should return stubbed value from spy', () => {
        const helperServiceSpy = jasmine.createSpyObj('HelperService', ['getHelpers']);
        let stubValue = 'Stubbed help!';
        helperServiceSpy.getHelpers.and.returnValue(stubValue);
        let service = new MasterService(helperServiceSpy);
        
        expect(service.HelpMe()).toBe(stubValue, 'Returned some stubbed value');
        expect(helperServiceSpy.getHelpers.calls.count()).toBe(1, 'spy method was called once!');
    });

    it('HelpMe should return another stubbed value from spy', () => {
        const helperServiceSpy = jasmine.createSpyObj('HelperService', ['getHelpers']);
        let stubValue = 'Another stubbed value';
        helperServiceSpy.getHelpers.and.returnValue(stubValue);
        service = new MasterService(helperServiceSpy);

        expect(service.HelpMe()).toBe(stubValue);
    })
})