import React, { useState } from "react";
import { Todocontext } from "../Context/Todocontextprovider";
import Todoitem from "./Todoitem";

const Todo = () => {
  const context = React.useContext(Todocontext);
  if (!context) {
    return <div>context is not available</div>;
  }

  const { data, handleAdd } = context;

  const [title, setTitle] = useState<string>("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    handleAdd(title);
    setTitle("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={handleChange} />
        <button>Add Todo</button>
      </form>

      {data &&
        data.map((ele) => {
          return <Todoitem key={ele.id} {...ele} />;
        })}
    </div>
  );
};

export default Todo;
