function Person(firstname,lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
  console.log('invoked');

}

Person.prototype.getFullName = function() {
  return this.firstname + '  ' + this.lastname;

}

var john = new Person('john', 'doe');
console.log(john);

var jane= new Person('jane', 'smith');
console.log(jane);

Person.prototype.getFormalFullName = function () {

  return this.lastname + ' ' + this.firstname;

}

console.log(john.getFormalFullName());
