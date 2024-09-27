// let lastName = 'Gowda';
// let firstName = new String('Hemanth');
// let message = new String('Kya \n bey MC');
// let words = message.split(' ');
// console.log(message);


// let msg = 'Hi nye mamu ${lastName}';

// console.log(msg);

// let date = new Date();


// console.log(date);


// let num = [1,2,3,4,5];

// console.log(num);

// console.log(num.indexOf(21));

// console.log(num.includes(2));

// console.log(num.indexOf(2,1));

// let courses = [{ no:1,
//     name:'Hemanth'
// },
//     {no:2,
//     name:'Gowda'
//     }];


// console.log(courses);

// // console.log(courses.indexOf({no:1,name:'Hemanth'}));

// let course =  courses.find(course=>course.name == 'Gowda');


// console.log(course);

// let a = [40,30,10,20,50];
// let v = a; 
// a.length = 0;
// console.log(a);
// console.log(v);

// let b = [6,7,8,9,10];

// let combined = a.concat(b);

// for (let value of a){
//     console.log(value);
// a.forEach(number=>console.log(number));

// const joined = a.join(',');
// console.log(joined);

// let num = joined.split(',');
// console.log(num);

// a.sort();
// a.reverse();
// console.log(a);


// let filtered = a.filter(num => num <= 0);

// console.log(filtered);

// let items = a.map(value=> 'student_no :' + value
// )

// console.log(items);

let numbers = [1,2,3,4,5];

let obj = numbers.filter(num => num>2).map(num=> {value : num});
console.log(obj);