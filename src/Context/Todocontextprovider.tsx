import React, { ReactNode, useState } from "react";

export const Todocontext = React.createContext<todoallprop | null>(null);

type todoprop = {
  id: number;
  title: string;
  status: boolean;
};

type childprop = {
  children: ReactNode;
};

type todoallprop = {
  data: todoprop[];
  handleAdd: (a: string) => void;
  handleUpdateIs: (b: number) => void;
  handleRemove: (c: number) => void;
};

const Todocontextprovider = ({ children }: childprop) => {
  const [data, setData] = useState<todoprop[]>([]);

  function handleAdd(title: string) {
    let obj = { id: Math.random() + Date.now(), title: title, status: false };
    setData([...data, obj]);
  }

  function handleUpdateIs(id: number) {
    let newalltodo = data.map((ele) => {
      if (ele.id == id) {
        ele.status = !ele.status;
        return ele;
      } else {
        return ele;
      }
    });
    setData(newalltodo)
  }

  function handleRemove(id:number){
    let deleteream = data.filter((ele)=>{
      if(ele.id != id){
        return ele
      }
    })
    setData(deleteream)
  }

  return (
    <Todocontext.Provider value={{ data, handleAdd, handleUpdateIs,handleRemove }}>
      {children}
    </Todocontext.Provider>
  );
};

export default Todocontextprovider;
