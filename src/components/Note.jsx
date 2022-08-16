import React from "react";
// import DeleteIcon from '@mui/icons-material/Delete';
import {IoTrashOutline} from 'react-icons/io5'
function Note(props) {
    function deleteF()
    {
        props.onDelete(props.id);
    }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deleteF}><IoTrashOutline /></button>
    </div>
  );
}

export default Note;