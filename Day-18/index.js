// // // function print(){
// // //     console.log("You clicked on Document");
// // // }
// // // document.addEventListener('click',print);

// // // // document.removeEventListener('click',print);


// // // const content = document.querySelector('#wrapper');

// // // content.addEventListener('click',function(event){
// // //     console.log(event);
// // // })


// // let links = document.querySelectorAll('a');

// // let firstLink = links[0];

// // firstLink.addEventListener('click',function(event){
// //     event.preventDefault();
// //     console.log("Maza Aya bhai");
// // });

// let myDiv = document.createElement('div');

// function linear(event){
//     console.log(event.target.textContent);
// }

// myDiv.addEventListener('click',linear);


// for(let i=1;i<=100;i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para' + i;
//     myDiv.appendChild(newElement);
// }

// document.body.appendChild(myDiv);

let element = document.querySelector('#container');

element.addEventListener('click',function(event){
    if(event.target.nodeName === 'SPAN')
        console.log("Span" + event.target.textContent);
})