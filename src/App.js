import { nanoid } from "nanoid";
import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState([
    { id: 1, title: "리엑트를 배워봅시다" },
    { id: 2, title: "usestate 배워봅시다"},
  ]);

  const [title, setTitle] = useState("");

  const inputTitle = (e) => {
    setTitle(e.target.value);
  };

  const buttonHandaler = () => {
    const newData = {
      id: nanoid(),
      title,
    }
    setData([...data,newData]);
    setTitle("");
  };

  return (
    <div className="layout">
      <div className="form">
        <input name="title" value={title} onChange={inputTitle} className="input"/>
        <button onClick={buttonHandaler} className="button">추가하기</button>
      </div>
      <div className="body-header">
        <h1> Todo List</h1>
      </div>
      <div className="listcointainer">
        {
          data.map((item) =>{
            return(
              <div className="list-wrapper" key={item.id}>
              <h3>{item.title}</h3>
            </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
