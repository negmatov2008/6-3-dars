import { useState } from "react";
function Form() {
  const [text, setText] = useState(undefined);
  const [todos, setTodos] = useState([]);
  const check = false;
  function handleSubmit(e) {
    e.preventDefault();
    console.log("salom");
    const inpEl = e.target.firstChild.nextElementSibling;
    if (todos.length > -1) {
      const copyTodos = [
        ...todos,
        {
          id: Math.ceil(Math.random() * 1000000),
          text: inpEl.value,
          complete: false,
          check: false,
          here: true,
        },
      ];

      setTodos(copyTodos);
      console.log(copyTodos);
    }
    inpEl.value = "";
  }
  function handleClcikCard(e) {
    e.target.firstChild.nextElementSibling.nextElementSibling.classList.remove(
      "hid"
    );
  }
  function delThis(id) {
    const findTodos = todos.filter((todo) => todo.id != id);
    setTodos(findTodos);
  }
  function clear() {
    const clearAll = todos.filter(
      (todo) => todo.text == "hfskjadhfishadfsydhgyudshfydcbsdchbdufbuydbysd"
    );
    setTodos(clearAll);
  }
  function checkBox(todos) {
    const newTodos = [...todos];
    setTodos(newTodos);
    console.log("salom");
  }

  return (
    <div className="all-form">
      <form onSubmit={handleSubmit}>
        <div className="doira"></div>
        <input type="text" placeholder="Create a new todo…" name="" id="" />
      </form>
      <div className="form-content">
        <div className="alohida">
          <img src="icon-alohida.svg" alt="" />
          <span>Complete online JavaScript course</span>
        </div>
        {todos.map((todo) => (
          <div className="card" onClick={handleClcikCard}>
            <div className="doira"></div>
            <span>{todo.text}</span>
            <img
              className="hid"
              onClick={() => {
                delThis(todo.id);
              }}
              src="icon-del.svg"
              alt=""
            />
          </div>
        ))}
        <div className="form-foot">
          <span className="how-much">{todos.length} items left</span>
          <div className="feature">
            <span
              onClick={() => {
                checkBox(todos);
              }}
              className="kok"
            >
              All
            </span>
            <span>Active</span> <span>Completed</span>
          </div>
          <span onClick={clear} className="clear">
            Clear Completed
          </span>
        </div>
      </div>
    </div>
  );
}

export default Form;
