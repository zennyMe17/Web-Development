// // const t1 = performance.now();

// // let myDiv = document.createElement('div');
// // for(let i=1;i<=100;i++)
// //     {

// //     let newElement = document.createElement('p');
// //     newElement.textContent = 'This is para' + i;

// //     document.body.appendChild(newElement);
// // }

// // document.body.appendChild(myDiv);


// // const t2 = performance.now();

// // console.log((t2-t1));




// let fragment = document.createDocumentFragment();

// for(let i=1;i<=100;i++)
//     {

//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para' + i;

//     document.body.appendChild(newElement);
// }

// document.body.appendChild(fragment);



function addPara(){
    let para = document.createElement('p');
    para.textContent = 'Js is single';
    document.body.appendChild(para);
}

function appendNewMessage(){
    let para = document.createElement('p');
    para.textContent = 'Kya Haal';
    document.body.appendChild(para);
}

addPara();
appendNewMessage();


setTimeout(function(){
    console.log("Hello Everyone")
},4000);