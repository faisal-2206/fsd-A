const myPromise=new Promise((resolve,reject)=>{
    let success=true;
    setTimeout(() => {
        if(success)
        resolve("Data sent successfully");
    else
        reject("Data not sent");}, 5000);
    
});
myPromise
.then((message)=>{console.log("Data: "+message);})
.catch((error)=>{console.log(error);});
