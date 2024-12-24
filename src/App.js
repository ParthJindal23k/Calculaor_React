import React, { useState } from 'react'
import './App.css';

const App = () => {

  
  const calculateResult = (input) =>{
    try {
      const operators = ['+','-','*','/','%'];
      let operator = null;


      for(let i=0;i<input.length;i++){
        if(operators.includes(input[i])){
          operator = input[i];
          break;
        }
      }

      if(!operator){
        setinput(parseFloat(input).toString());
        return;
      }

      const [operand1 , operand2] = input.split(operator).map(parseFloat);

      let result;
      switch(operator){
        case '+':
          result = operand1+operand2;
          break;

        case '-'  :
          result = operand1-operand2;
          break;
          
        case '*' :
          result = operand1*operand2
          break;

        case '/' :
          result = operand1/operand2;
          break;

        case '%':
          result = operand1%operand2;
          break;

        default:
          throw new Error("Invalid operator");
      }

      setinput(result.toString());


    } catch (error) {
      setinput(error);
    }
  }


  const handlebuttonclick = (value) =>{
    if(value === 'C'){
      setinput('');
    }
    else if(value === '<'){
      setinput(input.slice(0,-1));
    }
    else if( value === '='){
      // setinput(eval(input).toString()); 

      calculateResult(input);

    }
    else{
      setinput((prev) => prev + value);
    }
  }

  const [input , setinput] = useState('0');

  return (
    <div className='container'>
      <div className='calc'>
        <h1 id = "input">{input}</h1>
        <div>
          <button onClick={()=>handlebuttonclick('C')} >C</button>
          <button onClick={()=>handlebuttonclick('<')}>&lt;</button>
          <button onClick={()=>handlebuttonclick('%')}>%</button>
          <button onClick={()=>handlebuttonclick('/')}>/</button>
        </div>
        <div>
          <button onClick={()=>handlebuttonclick('7')}>7</button>
          <button onClick={()=>handlebuttonclick('8')}>8</button>
          <button onClick={()=>handlebuttonclick('9')}>9</button>
          <button onClick={()=>handlebuttonclick('*')}>*</button>
        </div>
        <div>
          <button onClick={()=>handlebuttonclick('4')}>4</button>
          <button onClick={()=>handlebuttonclick('5')}>5</button>
          <button onClick={()=>handlebuttonclick('6')}>6</button>
          <button onClick={()=>handlebuttonclick('-')}>-</button>
        </div>
        <div>
          <button onClick={()=>handlebuttonclick('1')}>1</button>
          <button onClick={()=>handlebuttonclick('2')}>2</button>
          <button onClick={()=>handlebuttonclick('3')}>3</button>
          <button onClick={()=>handlebuttonclick('+')}>+</button>
        </div>
        <div>
          <button onClick={()=>handlebuttonclick('0')}>0</button>
          <button onClick={()=>handlebuttonclick('00')}>00</button>
          <button onClick={()=>handlebuttonclick('.')}>.</button>
          <button onClick={()=>handlebuttonclick('=')}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
