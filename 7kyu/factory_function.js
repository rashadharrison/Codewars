/*sayName - this should return the full name of the person (e.g. {firstName: "John", lastName: "Doe"} => "John Doe" // when the sayName() method is called)
introduce - this should return a string of the following format: "Hello, my name is FULL_NAME. I am AGE years old. I am a GENDER.*/

function person(
	firstName,
	lastName,
	age,
	gender,
	employed,
	occupation,
	married
) {
	return {
		firstName: firstName,
		lastName: lastName,
		age: age,
		gender: gender,
		employed: employed,
		occupation: occupation,
		married: married,
		sayName: function () {
			return `${this.firstName} ${this.lastName}`;
		},
		introduce: function () {
			return `Hello, my name is ${this.sayName()}.  I am ${
				this.age
			} years old.  I am a ${this.gender}.`;
		},
	};
}