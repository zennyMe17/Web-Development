// object

// console.log(rectangle.length);


// factory function

// function createRectangle(length, breadth){
//     return rectangle = {
        
//         length,
//         breadth,
    
//         draw: function(){
//             console.log('drawing Rectangle');
//         }
    
//     };

    
// }

// let rectangleObj1 = createRectangle(5,4);

// constructor function -> pascal Notation (1st letter cap)

// function Rectangle(len,bre){
//     this.length = len;
//     this.breadth = bre;
//     this.draw = function(){
//         console.log("Hey whatsup");
//     }
// }

// let rectangleObject = new Rectangle(4,6);


// let Rectangle1 = new Function('length','breadth',
//     `this.length = length;
//     this.breadth = breadth;
//     this.draw = function(){
//         console.log("Hey whatsup");
//     }`
// );

// let rect = new Rectangle1(2,3);

// console.log(rect);

// let a =[1,2,3];

// let a = {value : 10};
// let b = a;
// a.value ++;
// console.log(a);
// console.log(b);

// let a ={value : 10};
// function inc(a){
//     a.value++;
// }
// inc(a);
// console.log(a);

let rectangle = {
    length : 2,
    breadth : 4,
    color : 'red'
};

// for (let key in rectangle)
// {
//     console.log(key,rectangle[key]);
// }


// for (let key of Object.entries(rectangle)){
//     console.log(key);
// }

// if ('color' in rectangle){
//     console.log('Present');
// }

// else{
//     console.log('absent');
// }


let src = {a:10,
    b:20,
    c:30
}

// let dest = {};

// for (let key in src){
//     dest[key] = src[key];
// }

let dest = Object.assign({},src);

// let dest = {...src};


console.log(dest);