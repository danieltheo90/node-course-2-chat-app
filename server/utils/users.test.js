const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(()=>{
    users = new Users();
    users.users =[{
      id:'1',
      name:'Mike',
      room:'Node course'
    },
    {
      id:'2',
      name:'Theo',
      room:'React course'
    },
    {
       id:'3',
      name:'Abc',
      room:'Node course'
    }]
  });
  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Andrew',
      room: 'The Office Fans'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('Should remove a user',()=>{
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('Should not remove user',()=>{
    var userId = '99';
    var user = users.removeUser(userId);

    expect(user).toNotExist(userId);
    expect(users.users.length).toBe(3);
  });

  it('Should find user',()=>{
    var userId='2';
    var user=users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('Should not find user',()=>{
    var userId='99';
    var user=users.getUser(userId);

    expect(user).toNotExist(userId);
  });

  it('should return name for node course',()=>{
    var userList =users.getUserList('Node course');

    expect(userList).toEqual(['Mike','Abc']);
  });
     it('should return name for rect course',()=>{
    var userList =users.getUserList('React course');

    expect(userList).toEqual(['Theo']);
  });
});
