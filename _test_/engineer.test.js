const Engineer = require('../lib/engineer');

describe('Employee', () => {
    it('If employee.name is a string then return true', () => {
        const employee = new Engineer('Jake', 15, 'Jake@cya.net', 'ChadFlender');
        expect(typeof employee.name).toEqual('string');
    });

    it('If employee.id is a number then return true', () => {
        const employee = new Engineer('Jake', 15, 'Jake@cya.net', 'ChadFlender');
        expect(typeof employee.id).toEqual('number');
    });

    it('If employee.email is a string then return true', () => {
        const employee = new Engineer('Jake', 15, 'Jake@cya.net', 'ChadFlender');
        expect(typeof employee.email).toEqual('string');
    });

    it('If employee.github is a string then return true', () => {
        const employee = new Engineer('Jake', 15, 'Jake@cya.net', 'ChadFlender');
        expect(typeof employee.github).toEqual('string');
    });

    it("If the employee.getRole() returns 'Engineer' then return true", () => {
        const employee = new Engineer();
        expect(employee.getRole()).toEqual('Engineer');
    });
})