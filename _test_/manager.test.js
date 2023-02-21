const Manager = require('../lib/manager');

describe('Employee', () => {
    it('If employee.name is a string then return true', () => {
        const employee = new Manager('Jake', 15, 'Jake@cya.net', 1);
        expect(typeof employee.name).toEqual('string');
    });

    it('If employee.id is a number then return true', () => {
        const employee = new Manager('Jake', 15, 'Jake@cya.net', 1);
        expect(typeof employee.id).toEqual('number');
    });

    it('If employee.email is a string then return true', () => {
        const employee = new Manager('Jake', 15, 'Jake@cya.net', 1);
        expect(typeof employee.email).toEqual('string');
    });

    it('If employee.officeNumber is a number then return true', () => {
        const employee = new Manager('Jake', 15, 'Jake@cya.net', 1);
        expect(typeof employee.officeNumber).toEqual('number');
    });

    it("If the employee.getRole() returns 'Manager' then return true", () => {
        const employee = new Manager();
        expect(employee.getRole()).toEqual('Manager');
    });
})