const adventurer = {
	name: "Timothy",
	hitpoints: 10,
	belongings: ["sword", "potion", "Tums"],
  companion: {
      name: 'Velma',
      type: 'Bat',
      companion: {
        name: 'Tim',
        type: 'Parasite',
        belongings: ['SCUBA tank', 'Rogan josh', 'health insurance']
      }
  }
}

console.log(adventurer.belongings)

console.log(adventurer.belongings[0])

for (let i=0; i < adventurer.belongingslength; i++) {
	console.log(adventurer.belongings[i]);
}

console.log('Access the companion object:', adventurer.companion)
console.log('Access the companions name:', adventurer.companion.name )
console.log('Access the companions type:', adventurer.companion.type)

//What would you write to console.log Tim's type?
console.log((adventurer.companion.companion.type))

//What would your write to console.log "health insurance"?
  console.log(adventurer.companion.companion.belongings[2])


// An Array of Objects

const movies = [ { title: "Tokyo Story" },  { title: "Paul Blart: Mall Cop" }, { title: "L'Avventura" } ];

console.log(movies[0])
console.log(movies[0].title)
// You could loop over the array and just print all of the titles:
for (let i=0; i < movies.length; i++) {
	console.log(movies[i].title);
}

// Combining Objects, Arrays, and Functions

const foo = {
  someArray:[1,2,3]
};
foo.someArray[0] // 1
// You can create a property for an object that is an object:
const fod = {
  someObject: {
      someProperty: 'oh hai!' 
  }
};
fod.someObject.someProperty; // oh hai! 

//You can create a property for an object that is a function (method):
const fo = {
  someMethod:()=>{
      console.log('oh hai');
  }
};

fo.someMethod();// logs 'oh hai!'
//You can store an object in an array:
const fooArray = [{someProperty:'weee'}, 2, 3];

console.log(fooArray[0].someProperty);


// Adding Classes

// class Character {
//   constructor (name, age, eye, hair) {
//     this.legs = 2;
//     this.arms = 2;
//     this.name = name;
//     this.age = age;
//     this.eyes = this.eyes;
//     this.hair = hair;
//   }

//   greet (otherCharacter) {
//     console.log('Hi' + otherCharacter + '!')
//   }
//   smite () {
//     console.log('I smite thee you vile person!');
//   }

// }

// const me = new Character();
// const you = new Character()

// me.greet('bob');
// me.smite();
// you.greet('bob');
// you.smite();
// console.log(me);
// console.log(you);
// console.log(typeof me);
// console.log(typeof you);

class Character {
  constructor (name, age, eyes, hair, lovesCats = false, lovesDogs) {
    this.legs = 2;
    this.arms = 2;
    this.name = name;
    this.age = age;
    this.eyes = eyes;
    this.hair = hair;
    this.lovesCats = lovesCats;
    this.lovesDogs = lovesDogs || false;
  }
  greet (otherCharacter) {
    console.log('Hi ' + otherCharacter + '!');
  }
  smite () {
    console.log('I smite thee you vile person!');
  }
}

const you = new Character('Cathy the Miraculous', 29, 'brown', 'locs of dark brown', true, true);
const me = new Character('Wendel the Wavy', 32, 'brown', 'wavy blonde');
console.log(me);
console.log(you);
me.hair = 'supernova red'
console.log(me)