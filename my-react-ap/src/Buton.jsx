
function Button (){
  const handleClick = () =>console.log('OUCH');

  const handleClick2 = (name)=> console.log(`${name} stop clicking me`)

  return(<button onClick={()=>handleClick2('Yonnik')}>Click Me</button>)//if you add a set of paraenthesis after a callback it will invoke it right away
}
export default Button  