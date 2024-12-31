import PropTypes from 'prop-types'
//Prop types helps us make sure we are passing through the correct vale. Say our name prop has to be a string, age has to be a number, is? has to be a boolean. 

function Student(props){
  return(
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Age : {props.age}</p>
      <p>Student : {props.isStudent? "Yes" : "No"}</p>
    </div>
  )
}
Student.propTypes = {
name: PropTypes.string,
age: PropTypes.number,
isStudent: PropTypes.bool,
}
//This creates the proptypes for each key5 
export default Student