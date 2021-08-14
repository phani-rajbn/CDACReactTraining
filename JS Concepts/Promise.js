// function divide(n1, n2, callback){
//     setTimeout(()=>{
//         if(typeof n1 != "number"){
//             callback("First arg should be a number");
//             return;
//         }
//         if(typeof n2 != "number"){
//             callback("Second arg should be a number");
//             return;
//         }
//         if(n2 === 0){
//             callback("Division by 0 is not allowed"); 
//             return;
//         }
//         callback(null, n1/n2);       
//     }, 1000);
// }

function divide(n1, n2){
    let res = new Promise((resolve, reject)=>{
        if(typeof n1 != "number"){
            reject("First arg should be a number");
            return;
        }
        if(typeof n2 != "number"){
            reject("Second arg should be a number");
            return;
        }
        if(n2 === 0){
            reject("Division by 0 is not allowed"); 
            return;
        }
        resolve(n1/n2);
    })
    return res;
}
console.log("start of the script");
const n1 = 12, n2 = 0;
// divide(n1,n2, (err, res)=>{
//     if(err)
//         console.log(err);
//     else

//         console.log(res)
// });

////////////////////For promise////////////////
// let promisedValue = divide(n1, n2)
// promisedValue.then((res)=>console.log(res));
// promisedValue.catch((err)=>console.log(err));


/////////For more polished usage of promise object/////////////////
// divide(n1, n2)
//     .then((res)=>console.log(res))
//     .catch((err)=>console.log(err))
/////////////////////////Using async and await/////////////////////////
async function callMe(){
    try{
        let res = await divide(n1, n2);
        console.log(res);
    }catch(err){
    console.log(err);
    }
}
callMe();
console.log("end of the script");
//mailto:phanirajbn@gmail.com 9945205684