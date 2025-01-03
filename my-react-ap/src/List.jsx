

function List(props){


const category = props.category
const itemList = props.items

const listItems = itemList.map(item => <li key={item.id}>
                                      {item.name}: &nbsp;
                                      <b>{item.calories}</b></li> 

)

return (<>
<h3 className= "list-category">{category}</h3> 
<ol className="list-items">{listItems}</ol>
</>)


}

export default List


//fruits.sort()

//fruits.sort((a,b)=> a.name.localeCompare(b.name) ) SORTS STINGS IN AN ARRAY BY THEIR NAME PROPERTY ALPHABETICALLY
//fruits.sort((a,b)=> b.name.localeCompare(a.name) ) reverse ALPHABETICAL

//fruits.sort((a,b) => a.calories - b.calories)//NUMERIC ORDER
//fruits.sort((a,b) => b.calories - a.calories)//REVERSE NUMERIC ORDER

//const lowCalFruits = fruits.filter(fruit =>fruit.calories < 100)
//const highCalFruits = fruits.filter(fruit =>fruit.calories >= 100)

