const Intern = require('../lib/intern');

describe('Employee', () => {
    it('If employee.name is a string then return true', () => {
        const employee = new Intern('Jake', 15, 'Jake@cya.net', 'Saint Joseph College');
        expect(typeof employee.name).toEqual('string');
    });

    it('If employee.id is a number then return true', () => {
        const employee = new Intern('Jake', 15, 'Jake@cya.net', 'Saint Joseph College');
        expect(typeof employee.id).toEqual('number');
    });

    it('If employee.email is a string then return true', () => {
        const employee = new Intern('Jake', 15, 'Jake@cya.net', 'Saint Joseph College');
        expect(typeof employee.email).toEqual('string');
    });

    it('If employee.school is a string then return true', () => {
        const employee = new Intern('Jake', 15, 'Jake@cya.net', 'Saint Joseph College');
        expect(typeof employee.school).toEqual('string');
    });

    it("If the employee.getRole() returns 'Intern' then return true", () => {
        const employee = new Intern();
        expect(employee.getRole()).toEqual('Intern');
    });
})