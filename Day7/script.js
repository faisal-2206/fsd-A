// let num=[1,2,3,4,45,5,46];
// // let newnum=num.map(x=>x*2);
// // console.log(newnum);

// // let sum=num.reduce((x,y)=>x+y,0)
// // console.log(sum);

// // let pro=num.reduce((a,b)=>a*b,1);
// // console.log(pro);

// const students=[
//     {name:'Alice',score:50},
//     {name:'Bob',score:65},
//     {name:'Charlie',score:70},
//     {name:'Faisal',score:80},
//     {name:'Rahul',score:40}
// ];
// let scores=students.map(x=>x.score);
// console.log(scores);

// let sumsc=students.reduce((a,b)=>a+b.score,0);
// console.log(sumsc);

// let grace=students.map(x=>{ if (x.score>60) return x.score+=10; else return x.score; } );
// let grace1=grace.reduce((a,b)=>a+b,0);
// console.log(grace);
// console.log(grace1);

console.log("Start");
setTimeout(()=> {
  console.log("First task");
  setTimeout(()=>{
    console.log("Second task");
    setTimeout(() => {
        console.log("Third task");
    }, 3000);
  },2000);
},1000);
console.log("End");