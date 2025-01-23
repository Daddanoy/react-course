import React, {useState} from 'react'

function DynamicStyling(){

  const[darkMode, setDarkMode] = useState(false);

  function darkPallette(){
    setDarkMode(true)
   

  }

  function lightPallete(){
    setDarkMode(false)

   
  }


  

  return(
    <div className={darkMode? 'dark-background' : 'light-background'}>
      <h1 className ="style-header">Dynamic Styling</h1>

  
      <button onClick={darkMode? lightPallete : darkPallette} className={darkMode? 'light-mode-button' : 'dark-mode-button'}>{darkMode? 'Lightmode' : 'Dark Mode'}</button>
    </div>
  )
}

export default DynamicStyling