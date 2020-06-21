import { UserService, User, MOCK_USERS } from './users.service';
// Jasmine testing without Angular's testing support
describe('UserService', () => {
    let service: UserService;
    beforeEach(() => service = new UserService());

    it('#getUsers should return an array', () => {
        expect(service.getUsers().length).toBe(3);
    });

    it('#should return passed in users', () => {
        expect(service.getUsers()).toBe(MOCK_USERS);
    });

    it('#observable function should resolve to 1', (done: DoneFn) => {
        service.testObservableFunction().subscribe(value => {
            expect(value).toBe(1);
            done();
        });
    });
    it('#promise function should resolve to some value', (done: DoneFn) => {
        service.testPromiseFunction().then(value => {
            expect(value).toBe('some async value');
            done();
        });
    });
})