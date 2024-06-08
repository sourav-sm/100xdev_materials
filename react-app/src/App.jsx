// import { useState } from 'react';

// //todo app
// //todo
// // {
// //   todos:[{title:"todo1",description:"first todo",completed:"false",}]
// // }



// function App() {
//   const [todos,setTodos]=useState([{
//     title:"go to gym",
//     description:"go to gym 7-9",
//     completed:false
//   },{
//     title:"go to gym",
//     description:"go to gym 7-9",
//     completed:false
//   }]);
  



//   const [count,setCount]=useState(0);
//   return (
//     <div>
//       //json....
//       {/* <Todo title={todos[0].titlr} desc> */}
//         {
//           todos.map(function(todo){
//               return <Todo title={todo.title} description={todo.description}/>
//           })
//         }
//     </div>
//   )

//   function Todo(props){
//     return <div>
//       <h1></h1>
//     </div>
//   }
// }

// function CustomButton(props){
  
//   function onClickeHandelar(){
//     props.setCount(props.count+1);
//   }

// return <button onClick={onClickeHandelar}>
//     Counter{props.count}
//   </button>
// }
// export default App



import {useState} from "react";

function App() {
  const [todos, setTodos] = useState([{
    title: "Go to gym",
    description: "Go to gym from 7-9",
    completed: false
  }, {
    title: "Study DSA",
    description: "Study DSA form 9-100",
    completed: true
  }, {
    title: "Study DSA",
    description: "Study DSA form 9-100",
    completed: true
  }, ]); 

  function addTodo() {
    // [1, 2]
    // [...todos, 3] => [1, 2, 3]
    setTodos([...todos, {
      title: "new Todo",
      description: "desc of new todo"
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add a random todo</button>
      {todos.map(function(todo) {
        return <Todo title={todo.title} description={todo.description} />
      })}

    </div>
  )
}

function Todo(props) {
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App
