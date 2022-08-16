import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
function App(){
    const[ans,finalAns]=useState([]);
    function createNote(newNote)
    {
        finalAns(prevVal=>{
               return [...prevVal,newNote]
        })
    }
    function deleteNote(id)
    {
        finalAns(delNotes=>{
            return delNotes.filter((delN,index)=>{
                return index!==id;
            })
        })
    }
    return (
        <div>
            <Header />
            <CreateArea onAdd={createNote}/>
            {ans.map((prevVal,index)=>{
               return <Note 
               key={index}
               id={index}
               title={prevVal.title}
                content={prevVal.content}
                onDelete={deleteNote}/>
            })}
            <Footer />
        </div>
    );
}
export default App;