class Person {
	constructor(name = "Anonymous", age = 0) {
		this.name = name;
		this.age = age;
	}
	getGretting() {
		return `Hi. I am ${this.name}!`;
	}
	getDescription() {
		return `${this.name} is ${this.age} year(s) old.`;
	}
}

class Student extends Person {
	constructor(name, age, major) {
		super(name, age);
		this.major = major;
	}

	hasMajor() {
		return !!this.major;
	}
	getStudyMajor() {
		return `Hi i have studied ${this.major}`;
	}
	getDescription() {
		let description = super.getDescription();

		if (this.hasMajor()) {
			description += ` there majos is ${this.major}.`;
		}

		return description;
	}
}

class Traveler extends Person {
	constructor(name, age, homeLocation) {
		super(name, age);
		this.homeLocation = homeLocation;
	}
	hasHomeLocation() {
		return !!this.homeLocation;
	}
	getGretting() {
		let gretting = super.getGretting();
		if (this.hasHomeLocation()) {
			gretting += ` I'm vising from ${this.homeLocation}`;
		}
		return gretting;
	}
}

const joni = new Traveler("Joni", 20, "SUomi");
console.log(joni.getGretting());

const me = new Person("kkkkakkaa", 26);
console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());
