

function List(){

const fruits = [  {id: 1, name:'apple', calories: 95},
                  {id: 2, name:'orange', calories:45}, 
                  {id: 3,name:'banana', calories: 105}, 
                  {id: 4,name:'coconut', calories: 159},
                   {id: 5 ,name:'pineapple', calories: 37}];

//fruits.sort()

//fruits.sort((a,b)=> a.name.localeCompare(b.name) ) SORTS STINGS IN AN ARRAY BY THEIR NAME PROPERTY ALPHABETICALLY
//fruits.sort((a,b)=> b.name.localeCompare(a.name) ) reverse ALPHABETICAL

//fruits.sort((a,b) => a.calories - b.calories)//NUMERIC ORDER
//fruits.sort((a,b) => b.calories - a.calories)//REVERSE NUMERIC ORDER

const lowCalFruits = fruits.filter(fruit =>fruit.calories < 100)

const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>
                                      {lowCalFruit.name}: &nbsp;
                                      <b>{lowCalFruit.calories}</b></li> 

)

return (<ol>{listItems}</ol>)

}

export default List