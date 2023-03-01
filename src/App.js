import React,{useState} from 'react';
import {FaTimes} from 'react-icons/fa';

import './App.css';

function App() {
  const [newItem, setNewItem]=useState("");
  const [items, setItems]=useState([]);
  const addNewItem=()=>{
    if(!newItem){
      alert("Enter An Items");
      return;
    }
    const item = {
      id: Math.floor(Math.random()*1000),
      value:newItem
    };
    setItems(oldList =>[...oldList,item]);
    setNewItem("");
   
  }
  function deleteItem(id){
    
    const newArray=items.filter(item=>item.id !== id);
    setItems(newArray);
  }
  return (
    <div className="App">
<h1>Todo List APP </h1>
<input 
type="text"
placeholder="Add new items"
value={newItem}
onChange={(e)=>{
  setNewItem(e.target.value);
}}
/>
<button onClick={()=>addNewItem()} className="buttons">Add</button>
<ul>
  {items.map(item=>{
    return(
      <li key={item.id}>{item.value} <button onClick={()=>deleteItem(item.id)}><FaTimes /></button></li>
    );
  }
  )
  }
</ul>
    </div>
  );
}

export default App;
