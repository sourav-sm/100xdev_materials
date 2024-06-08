import './App.css'

function App(task:TodoType) {

  return (
    <>
      <h1>{task.title}</h1>
      <h2>{task.description}</h2>
      <h4>{task.done}</h4>
    </>
  )
}

interface TodoType{
  title:String,
  description:String,
  done:boolean,
}


export default App
