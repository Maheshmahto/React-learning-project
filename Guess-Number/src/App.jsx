
import { useRef, useState } from 'react';
import './App.css'
import Input from './Componets/Input';
import Result from './Componets/Result';
// import Button from './Componets/Button';
 const Number=Math.floor(Math.random()*20)+1;

const App=()=>{
    const [userNumber,setUserNUmber]=useState(0);
    // const[inputValue,setInputValue]=useState(0);
    const inputRef=useRef();
    
    // const inputNumber = (event) => {
    //     setInputValue(event.target.value);
        
    // };


    const ButtonClick=()=>{
          // setInputValue("");
          const inputValue=inputRef.current.value;
            setUserNUmber(inputValue);

            inputRef.current.value="";

          
    }
    
 

  return (
    
  <>
   <div className="Body">
      <div className="container">
          <h2>Guess the Number</h2>
          <h3>Guess Number between 1 to 20</h3>
          <Input  inputRef={inputRef} ButtonClick={ButtonClick}  ></Input>
             
       
           < Result MathNumber={Number} userNumber={userNumber} ></Result>

          
           
      
     </div>
   </div>
 
  
  
  </>
  );
}
export default App;