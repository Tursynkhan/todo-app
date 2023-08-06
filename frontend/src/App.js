import './App.css';
import {useState} from 'react'

let nextId=0

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])

  return (
   <div className='container'>
    <h1>Todo:</h1>
    <input 
     value={name} 
     onChange={e=>setName(e.target.value)}/>
  

    <button onClick={()=>{
      setList([
        ...list,
        {id:nextId++,name:name,}
        ]);
        }}
        >
          Add
          </button>

    <ul>
      {list.map(item=>(
        <li key={item.id}>{item.name}</li>
      ))}
    </ul> 
   </div>
  );
}

export default App;
