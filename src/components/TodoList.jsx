import React, { useEffect,  useState } from 'react'

export const TodoList = ( ) => {
  const [renderItems, setrenderItems] = useState([
    {
      "userId": 1,
      "id": 1,
      "title": "item 1",
      "completed": false
    },
    {
      "userId": 2,
      "id": 2,
      "title": "item 2",
      "completed": false
    },
    {
      "userId": 3,
      "id": 3,
      "title": "delectus aut autem",
      "completed": false
    }
  ])
  const [currentItem, setcurrentItem] = useState("")

  useEffect(() => {
    fetchData()
  }, [])
  

  useEffect(() => {
    console.log("todo list changed")
  }, [renderItems])
  

  const fetchData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos")
      const data = await response.json()
      setrenderItems(data);
    } catch (error) {
      console.log(error)
    }
  }

  const handleTextChange = (event) => {
    setcurrentItem(event.target.value);
  }

  const onAddItem = () => {
    setrenderItems([
      ...renderItems,
      {
        userId: renderItems.length + 1,
        id: renderItems.length + 1,
        title: currentItem,
        completed: false
      }
    ])
    setcurrentItem("")

  }

  return (
    <div>
      {renderItems.map((item) => 
        <div>
            <label>{item.title}</label>
        </div>
      )}
      <input type='text' onChange={handleTextChange} value={currentItem}/>
      <button onClick={onAddItem}>Agregar item</button>
    </div>
  )
}
