import React, { useState } from "react";
// import {IoAddCircleSharp} from 'react-icons/fa';
function CreateArea(props) {
    const[notes,setNotes]=useState({
        title:"",
        content:""
    })
    function change(event)
    {
        const{name,value}=event.target;
        setNotes(prevNotes=>{
            return{
            ...prevNotes,
            [name]:value
            }
        })
    }
    function addNote(event)
    {
        props.onAdd(notes);
        event.preventDefault();
    }
  return (
    <div>
      <form>
        <input onChange={change} name="title" placeholder="Title" value={notes.title}/>
        <textarea onChange={change}  name="content" placeholder="Take a note..." rows="3" value={notes.content}/>
        <button onClick={addNote}>+</button>
      </form>
    </div>
  );
}

export default CreateArea;