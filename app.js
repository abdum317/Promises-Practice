// function checkEven(num){
//     return new Promise((resolve,reject)=>{
//         if(num % 2 === 0){
//             resolve();
//         }
//         else{
//             reject();
//         }
//     })
// }

// checkEven(1)
// .then(()=>{
//     console.log("this is an even number");
// })
// .catch(()=>{
//     console.log("this is not an even number");
// })











// function checkTime (){
//     let datee = new Date().getSeconds()
//     return new Promise((resolve, reject) => {
//         if(datee % 5 === 0){
//             reject({error:404 , message:"Please register first"})
//         }
//         else if(datee %2 === 0){
//             resolve("unauthorized");
//         }
//         else{
//             resolve("authorized")
//         }
//     })
// }
// checkTime()
// .then((symbol)=>{
//     console.log(`you are ${symbol}`);
// })
// .catch((err)=>{
//     console.error(err.message);
// })






let users = [
    { email: 'abc@gmail.com', password: "123456" },
    { email: 'xyz@gmail.com', password: "ab1232" },
    { email: 'def@gmail.com', password: "asdfasd" },
]
// console.log(users[0].email);
function validateEmailPass (){
    let emails = 'abc@gmail.com';
    let passwords = '123456'
    return new Promise((resolve, reject) => {
        for(let x = 0; x<users.length; x++){
            if(users[x].email === emails && users[x].password === passwords){
                resolve();
            }
            else if( JSON.stringify(users[x].email) === emails && JSON.stringify(users[x].password) !== passwords){
                reject({error:404,message:"password is not correct"})
            }
            else if(JSON.stringify(users[x].email) !== emails && JSON.stringify(users[x].password === passwords)){
                reject({error:404,message:"email is not correct"})
            }
            else{
                reject({error:404,message:"email and password is not correct"})
            }

        }
    })
}


validateEmailPass()
.then(()=>{
    console.log("welcome to next page");
})
.catch((symbol)=>{
    console.error(`your ${symbol}`);
})