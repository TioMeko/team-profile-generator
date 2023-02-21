const Employee = require('../lib/employee');

describe('Employee', () => {
    it('If employee name is a string then return true', () => {
        const employee = new Employee('Jake', 15, 'Jake@cya.net');
        expect(typeof employee.name).toEqual('string');
    });

    it('If employee ID is a string then return true', () => {
        const employee = new Employee('Jake', 15, 'Jake@cya.net');
        expect(typeof employee.id).toEqual('number');
    });

    it('If employee email is a string then return true', () => {
        const employee = new Employee('Jake', 15, 'Jake@cya.net');
        expect(typeof employee.email).toEqual('string');
    });

    it("If the employee role returns 'Employee' then return true", () => {
        const employee = new Employee();
        expect(employee.getRole()).toEqual('Employee');
    });
})