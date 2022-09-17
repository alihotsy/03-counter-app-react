// import React from 'react';
// import ReactDOM from 'react-dom';
// import FirstApp from './PrimeraApp';
// import './index.css';

// const divRoot = document.querySelector("#root");

// ReactDOM.render(<FirstApp saludo="Hola, soy Terry!"/>, divRoot);

import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';
import './index.css';

const appDiv = document.querySelector("#root");

ReactDOM.render(<CounterApp />,appDiv);











// const mySquareNumber = (num) =>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(num*num);
//         }, 1500);
//     })
// }

// const myAsync = async() =>{
//     const number = await mySquareNumber(4);
    
//     return number * 9
// }
// console.log(typeof myAsync())