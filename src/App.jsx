import { useState } from "react";
import Form from "./form";
let count = 0;
function App() {
  function darkMod(e) {
    count++;
    if (count == 1) {
      e.target.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add(
        "dark"
      );
      e.target.setAttribute("src", "icon-light.svg");
      e.target.parentElement.parentElement.parentElement.firstChild.setAttribute("src","bg-dark.jpg")
    } else {
      e.target.parentElement.parentElement.parentElement.parentElement.parentElement.classList.remove(
        "dark"
      );
      e.target.setAttribute("src", "icon-dark.svg");
      e.target.parentElement.parentElement.parentElement.firstChild.setAttribute("src","bg-light.jpg")
    }
    if (count == 2) {
      count = count - 2;
    }
  }
  return (
    <>
      <img className="bg-img" src="bg-light.jpg" alt="" />
      <div className="container">
        <div className="nav">
          <h4 className="logo">TODO</h4>
          <img onClick={darkMod} src="icon-light.svg" alt="" />
        </div>
        <Form/>
        <h6 className="footer">Drag and drop to reorder list</h6>
      </div>
    </>
  );
}

export default App;

// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [inp, setInp] = useState();
//   const [todos, setTodo] = useState([]);
//   function handleSubmit(e) {
//     e.preventDefault();
//     const copyTodos = [
//       ...todos,
//       { text: inp, id: Math.ceil(Math.random() * 1000000), complate: false },
//     ];
//     setTodo(copyTodos);
//     setInp("");
//   }
//   function handleChange(e) {
//     setInp(e.target.value);
//   }
//   function delet(todo) {
//     const filtTodos = todos.filter((t) => t != todo);
//     setTodo(filtTodos);
//   }
//   const chiziq = (id) => {
//     const oneTodo = copyTodos.find((t) => t.id == id);
//     oneTodo.complate = !oneTodo.complate;
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={inp} onChange={handleChange} name="" id="" />
//         <button>submit</button>
//       </form>
//       <ul>
//         {todos.map((todo) => (
//           <li
//             onClick={() => {
//               chiziq(todo.id);
//             }}
//           >
//             {todo.text}
//             <button
//               onClick={() => {
//                 delet(todo.id);
//               }}
//             >
//               del
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
