// let a =() =>{
//     console.log("Arror Function");
// }

// let b=() => console.log("Arror Function 2");

// b();
// a();
//  let c=(x,y)=>{
//     return x+y;}

//     let res=c('Rahul','Ravi');

// let res2=c(25,16);
// console.log(res,res2);

// let changeheader=()=>{
//     let head1=document.querySelector("h1");
//     head1.textContent="Changed the title";
    
// };

// function display()
// {
//     let p1=document.querySelectorAll('p');
//     p1[0].innerHTML="I am in parra";
//     p1[0].style.backgroundColor="red";
//     p1[1].innerHTML="I am in parra two ";
//     p1[1].style.backgroundColor="green";
//     let a1=document.querySelector("a");
//     a1.setAttribute("href","https://chatgpt.com/")
//     a1.innerHTML=" Open Chat GPT";
// }

let addContent =() => {
    const newDiv =document.createElement('div');
    newDiv.textContent="New Div Added";
    const body=document.querySelector('body');
    body.appendChild(newDiv);
}