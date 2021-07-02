const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
// creates an initial Employee object to test with
const emp = new Employee('Rye',1,'sample@gmail.com');
// test that the properties of the employee object are being created properly
test('creates an employee object',() => {
    expect(emp.name).toBe('Rye');
    expect(emp.id).toEqual(1);
    expect(emp.email).toBe('sample@gmail.com');
})

test('getName() returns the created name', () => {
    expect(emp.getName()).toBe('Rye');
})

test('getId() returns the created id', () => {
    expect(emp.getId()).toEqual(1);
})

test('getEmail() returns the created email', () => {
    expect(emp.getEmail()).toBe('sample@gmail.com');
})

test('getRole() returns the role "Employee"', () => {
    expect(emp.getRole()).toBe('Employee');
})