const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');
// creates the data object to feed into the class
const data = {name:'Rye',id:1,email:'sample@gmail.com',ofNum:'B-102'};
// creates new Manager object to test using the above data
const man = new Manager(data);

test('creates a man object with all of the required parameters', () => {
    expect(man.name).toBe('Rye');
    expect(man.id).toEqual(1);
    expect(man.email).toBe('sample@gmail.com');
    expect(man.ofNum).toBe('B-102');
})

test('confirms the inherited methods function', () => {
    expect(man.getName()).toBe('Rye');
    expect(man.getId()).toEqual(1);
    expect(man.getEmail()).toBe('sample@gmail.com');
})

test('confirms the new method overwrites the old method and prints "Manager" instead of "Employee".', () => {
    expect(man.getRole()).toBe('Manager');
})