import './App.css';
import {useState} from 'react'
import Edit from './edit';
let nextId=2

const initialTodos =[
  {id:0,title:'Buy eggs',done:false},
  {id:1,title:'Buy vitamins',done:false}
]

function App() {
  const [title, setTitle] = useState('')
  const [list, setList] = useState(initialTodos)
  
  function handleDelete(id){
    setList(
    list.filter(i=>i.id!==id)
    )
  }
  function handleAdd(){
    setList(
      [
        ...list,
        {
          id:nextId++,
          title:title,
        }
      ]
    )
  }
  function handleChange(nextTodo) {
    console.log('app:',nextTodo)
    setList(list.map(t => {
      if (t.id === nextTodo.id) {
        return nextTodo;
      } else {
        return t;
      }
    }));
  }
  return (
   <div className='container'>
    <h1>Todo:</h1>
    <input 
     value={title} 
     onChange={e=>setTitle(e.target.value)}/>
  

    <button onClick={()=>{handleAdd()} }>
        Add
    </button>

    <ul>
      {list.map(item=>(
        <li key={item.id}>
          <input
            type="checkbox"
            checked={item.done}
            onChange={e => {
              handleChange({
                ...item,
                done: e.target.checked
              });
            }}
          />
          {item.title}
          <Edit todo={item} onChangeTodo={handleChange}/>
          <button onClick={()=>{handleDelete(item.id)}}>
            Delete
          </button>
        </li>
      ))}
    </ul> 
   </div>
  );
}

export default App;
