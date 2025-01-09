
function Button (){
  
const handleClick = (e)=> console.log(e)//SHOWS ALL THE PROPERTIES LINKED TO THIS OBJECT.
 

  return(<button onClick={(e)=> handleClick(e)}>Click Me</button>)

    //const handleClick2 = (name)=> console.log(`${name} stop clicking me`)

  //return(<button onClick={()=>handleClick2('Yonnik')}>Click Me</button>)//if you add a set of paraenthesis after a callback it will invoke it right away.

   /*let count = 0
  const handleClick = (name) =>{
    if(count <3){
      count++
      console.log(`${name} clicked me ${count} times`)
    }else {
      console.log(`${name} stop clicking me`)
    }
  };
*/
}
export default Button  