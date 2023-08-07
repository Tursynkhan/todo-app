import { useState } from "react";

export default function Edit({todo,onChangeTodo}){
  const [isEditting, setisEditting] = useState(false);
  let todoContent;

  if (isEditting){
    todoContent=(
    <>
     <input
          value={todo.title}
          onChange={e => {
            onChangeTodo({
              ...todo,
              title: e.target.value
            });
          }} />
      <button onClick={()=>setisEditting(false)}>Save</button>
    </>
  )}else {
    todoContent=(
    <>
    {todo.title}
    <button onClick={()=>setisEditting(true)}>Edit</button>
    </>
    );
  }
  return(
    <>
    {todoContent}
    </>
  )
}