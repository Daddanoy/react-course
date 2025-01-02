import UserGreeting from "./UserGreeting"


function App() {
return (
  <>
   <UserGreeting isLoggedIn={true} username="Yonndada"/>
   <UserGreeting isLoggedIn={true}/>
  </>
  
)
}

export default App
