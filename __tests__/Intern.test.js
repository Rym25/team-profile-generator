const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');
// creates data to feed into Intern class
const data = {name:'Rye',id:1,email:'sample@gmail.com',school:'Rose-Hulman'};
// creates new Intern object to test using the above data
const int = new Intern(data);

test('creates an int object with all of the required parameters', () => {
    expect(int.name).toBe('Rye');
    expect(int.id).toEqual(1);
    expect(int.email).toBe('sample@gmail.com');
    expect(int.school).toBe('Rose-Hulman');
})

test('confirms the inherited methods function', () => {
    expect(int.getName()).toBe('Rye');
    expect(int.getId()).toEqual(1);
    expect(int.getEmail()).toBe('sample@gmail.com');
})

test('confirms Intern method returns the School Name', () => {
    expect(int.getSchool()).toBe('Rose-Hulman');
})

test('confirms that getRole() called from Intern returns Intern', () => {
    expect(int.getRole()).toBe('Intern');
})