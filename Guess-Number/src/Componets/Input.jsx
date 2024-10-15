import style from "./input.module.css";
const Input = ({ButtonClick,inputRef}) => {
  return (
    <>
     <input
      className={style.in}
      type="Number"
      placeholder="Enter a Number"
      // onChange={inNumber}
      // value={inputValue}
      ref={inputRef}
    />
    <button className={style.btn}
    
     onClick={ButtonClick}
    > Submit</button>


    </>
   
  );
};
export default Input;
