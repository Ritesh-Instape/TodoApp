import React from "react";
import { Todocontext } from "../Context/Todocontextprovider";

type todoisprop = {
  id: number;
  title: string;
  status: boolean;
};


const Todoitem = ({ id, title, status }: todoisprop) => {

  const context = React.useContext(Todocontext);
  if (!context) {
    return <div>context is not available</div>;
  }


const { handleUpdateIs,handleRemove } = context;


  function handleChangeTodoIs(id:number){
    handleUpdateIs(id)
    }
    

    function handleDeleteIs(id:number){
handleRemove(id)
    }



  return <div>
    <h1>title is : {title}</h1>
    <input type="checkbox" checked={status} onChange={()=>{handleChangeTodoIs(id)}}/>
    {status && <button onClick={()=>{handleDeleteIs(id)}}>Delete</button>}
  </div>;
};

export default Todoitem;
