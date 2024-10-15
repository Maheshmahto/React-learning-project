
const Result=({userNumber,MathNumber})=>{
    let result;
    if (userNumber) {
        if (userNumber >MathNumber) {
            result= "you guess the high number";
        }
        else if (userNumber< MathNumber) {
            result= "you guess the low number";
    
        }
        else if(userNumber==MathNumber){
            result="Congratulation you guess the right number";
        }
    }
    return  <h4>{result}</h4>;
             
}
export default Result;