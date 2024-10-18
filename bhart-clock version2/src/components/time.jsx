import { useEffect, useState } from "react";

function Time(){
    // let date=new Date();
    const [time,setTime]=useState(new Date());
    useEffect( ()=>{
         const interverlId=setInterval( ()=> {
            setTime(new Date());
         },1000);
         return ()=>{
            clearInterval(interverlId);
         }
    },[])
    return (

        <>
        <h3>This is the current rime :{time.toLocaleDateString()}-{time.toLocaleTimeString()}</h3>

    </>

    );

  
}
export default Time;    