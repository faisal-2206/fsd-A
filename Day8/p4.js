function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const students=[
                    {name:'Alice',score:50},
                    {name:'Bob',score:65},
                    {name:'Charlie',score:70},
                    {name:'Faisal',score:80},
                    {name:'Rahul',score:40}
                ];
            let sumsc=students.reduce((a,b)=>a+b.score,0);
            resolve(sumsc);
        }, 1000);

    });
}
fetchData().then((data)=>console.log(data))
.catch((error)=>console.log(error)
);