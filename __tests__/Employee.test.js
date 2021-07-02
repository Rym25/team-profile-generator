const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

// test that the properties of the employee object are being created properly
test('creates an employee object',() => {
    const emp = new Employee('Rye',1,'sample@gmail.com');

    expect(emp.name).toBe('Rye');
    expect(emp.id).toEqual(1);
    expect(emp.email).toBe('sample@gmail.com');
})