import moment from "moment";

// console.log("bring in cup 1");
// console.log("bring in cup 2");
// cup(1000)
// console.log("bring in cup 3");
// console.log("bring in cup 4");


// function cup(guessTime: number) {
//     console.log();    
//     console.log("waiting for joan.....!");

//     let time = new Date().getTime();
//     let delayTime= time + guessTime;

//    setTimeout(() => {
//     while(new Date().getTime()< delayTime) {
//         // console.log("start Processing");        
//         }

//         console.log("start process executed at: ", moment(time). format("LTS"));
//     console.log("End process executed at: ", moment(delayTime). format("LTS"));
//     console.log(
//         "this whole process took",
//         (delayTime - time)/ 1000,
//         "seconds"
//     );

//     console.log();
//    },0)
    
// }

const check = (cd:any): void => {
     setTimeout(()=>{
        return cd(null,"Data");
    },0)
}

// console.log(
//     check((res: any) =>{ 
//         console.log(`viewing ${name} data`);

//     console.log(
    //     check((res: any) =>{
        //     console.log(res);
    
        
//     })
// );

// let name: string= "Daniel"

// check(() =>{
//     console.log("resolve check1");

//     check(() =>{
//         console.log("resolve check2");
        
//         check(() =>{
//             console.log("resolve check3");
//         })
        
//     })
    
// })

// const promise = new Promise((resolve, reject)=>{
//     if(true){
//         resolve("A promise kept")
//     }else{
//         reject("A promise failed")
//     }
// });

// promise.then((res) => {
//     console.log(`${res} with ${myName}`);
    
// }).catch((err) => {
//     console.log(err);
    
// }).finally(()=>{
//     console.log("clean up code");
    
// })

// let myName = "Daniel"

import PromptSync from "prompt-sync";
const prompt = PromptSync();

// const promise = new Promise((resolve, reject) => {
//     const num:number = Math.floor(Math.random() * 10);

//     const guess=parseInt(prompt("Guess your number"))

//     if(guess === num){
//         resolve(" Correct")
//     }else{
//         reject(" Invalid number")
//     }
// })
// promise.then((res) => {
//     console.log(res);
    
// }).catch((err) =>{
//     console.log(err);
    
// })

// const makeRequest = (time: number) =>{
//     return new Promise((resolve, reject) =>{
//         return setTimeout(() =>{
//             resolve(`it takes ${time/ 1000} seconds to return this result`)
//         }, time)
//     }
// };

// makeRequest(2000).then((res) => {
//     console.log();
//     console.log(res);   
// };

// Promise.race([
//     makeRequest(2000),
//     makeRequest(1000),
//     makeRequest(9000),
//     makeRequest(500),
// ]).then((res) =>{
//     console.log(res);
// })

let userEmail: string;
let userpassword: string;

const makeRequest = () =>{
    return new Promise((resolve, reject) =>{
        const email =prompt("Enter your email address: ")
        const password = prompt("Enter your password: ")

        userEmail = email;
        userpassword=password

        return setTimeout(() =>{
            if(userEmail=== "Daniel@gmail.com" && userpassword === "Daniel"){
                console.log();
                resolve(`${userEmail.split("@")[0]}`)
                
            }else{
                console.log();
                reject("user authentication failed")
                
            }
        }, 2000)
    })
}

const landingPage =(res: any)=>{
    console.log(`Welcome ${res}, to our landing page`);
};

makeRequest().then((res)=>{
    landingPage(res);
}).catch((err) =>{
    console.log(err);
    
})


// const myWeb= async()=>{
//     const val= await makeRequest()
//     const result=landingPage(val)

//     console.log(result);
    
// };

// myWeb()
