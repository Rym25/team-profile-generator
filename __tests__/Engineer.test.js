const Engineer = require('../lib/Engineer');
// creates data to feed into Engineer class
const data = {name:'Rye',id:1,email:'sample@gmail.com',gitUserName:'Rym25'};
// creates new Engineer object to test using the above data
const eng = new Engineer(data);

test('creates a man object with all of the required parameters', () => {
    expect(eng.name).toBe('Rye');
    expect(eng.id).toEqual(1);
    expect(eng.email).toBe('sample@gmail.com');
    expect(eng.gitUserName).toBe('Rym');
})