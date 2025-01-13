function ProfilePicture(){
const imageUrl = './roshi.jpg'

const handleClick = (e)=> e.target.style.display = 'none'

return (<img onClick={(e)=>handleClick(e)} src={imageUrl}></img>)
}
//const handleClick = (e)=> console.log('Ouch')
export default ProfilePicture  