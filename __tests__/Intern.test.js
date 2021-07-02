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