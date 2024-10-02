// // setTimeout(function(){
// //     console.log("Third")
// // },3000);

// // function synch()
// // {
// //     console.log('First');
// // }

// // synch();

// // console.log('Second');


// let meraPromise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Iam Promised");
//     },5000);
//     // resolve(2002);
//     reject(new Error('Bhaisahab Error Aya hai'));
// });



// meraPromise.then((value)=>{console.log(value)},(error)=>{console.log("Recieved an error")});


// let p1 = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log('T1');
//     },2000);
//     resolve(true);
// })


// p1.then(()=>{
//     let p2 = new Promise(function(resolve,reject){ 
//         setTimeout(()=>{
//             console.log('T2');
//         },3000);
//         resolve("P2 Solved");
//     })
//     return p2;
// }).then((value)=>{console.log(value)});


// async function abcd(){
//     return 7;
// }

async function utilyty() {

    let ktkMausam = new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve("Ktk is too hot");
        }, 1000);
    });
    
    let apMausam = new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve("ap is too hot");
        }, 3000);
    });

    let kM = ktkMausam;
    let aM = apMausam;

    return [kM,aM];
    
}

