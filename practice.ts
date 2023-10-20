import moment from "moment";
import PromptSync from "prompt-sync";
const prompt = PromptSync()


// console.log("Cup 1");
// console.log("Cup 2");
// console.log("Cup 3");
// cup(1000)
// console.log("Cup 4");
// console.log("Cup 5");


// function cup(guessTime: number){
//     console.log();    
//     console.log("waiting.....!");

//     let time = new Date().getTime()    
//     let delayTime = time + guessTime
    
//     setTimeout(() =>{
//         while (new Date().getTime() < delayTime) {
//             // console.log("start Processing");        
//         }
    
//         console.log("Start process started at: ", moment(time). format("LTS"));
//         console.log("End process executed at: ", moment(delayTime).format("LTS"));
//         console.log("This whole process took", (delayTime - time)/1000, "seconds");
//     },0)   
        
    
    
// }


// const check = (el: any) =>{
//     setTimeout(() =>{
//         return el(name)
//     },0)
// }

// console.log(
//     check((res:any)=>{
//         console.log(res);
        
//     })
// );

// let name: string= "Daniel"


// const prom= new Promise((resolve, reject) =>{

//     let x = 5
//     let y = 5

//     if(x === y){
//         resolve("Answer")
//     }else{
//         reject("Failed")
//     }
// });

// prom.then((res) =>{
//     console.log(`correct ${res} ${name}`);
// }).catch((err) =>{
//     console.log(`wrong ${err} ${name}`);
    
// })

// let name = "Daniel"




const num = Math.floor(Math.random()*10)

const promise = new Promise ((resolve, reject) =>{
    let attempt = 0
    
    while (attempt < 4) {
        let guess=parseInt(prompt("Guess your number you have only 4 trials in this game: "))
        attempt++

        if (guess !== num || attempt > 4) {         
            console.log(`you have use ${attempt} trials in the game`);            
            reject("wrong number")
            continue;
            
        }else{
            resolve("Correct number")
            break;
        }
    }

})

promise.then((res) =>{
    console.log(res);
    
}).catch((err) =>{
    console.log(` You guessed ${err}, the correct guess is ${num}`);
    
})
