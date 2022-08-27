
import './App.css';
import React,{use, useEffect, useState}from 'react';
import Item from './Item';


function App(){
  const[newTask, setNewTask]=useState('');
  const[tasks,setTasks] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())//resolved
    // .then(json => setTasks(json))
    // .then(json => console.log(json))
    .catch(err => console.log(err));//rejected
  })

  return (
    <div>
      <h3>Todolist</h3>
      <div>
        <input placeholder='Add something'onChange={(e)=>setNewTask(e.target.value)} value={newTask}/>
        <button onClick={() =>{ 
          if(!newTask){
            alert('hey give some value');
            return
          }
          console.log("Hey new task added",newTask);
          setTasks([...tasks,newTask])
          setNewTask('');
          }}>Add</button>
          <div style={{padding:30}}>
            {tasks.map((task,index)=>{
              return(
                <li key={index}>
                  {task}
                  <button onClick={() =>{
                    const filteredArr = tasks.filter((element)=>{
                      if(element!==task){
                        return element;
                      }
                    });
                    setTasks(filteredArr);
                  }}style = {{}}>Done</button>
                </li>
              )
            })}
          </div>
      </div>
    </div>
  )
}

// class App extends Component{
//   state={
//     course:"react",
//     count:0,
//   }
//   handleClick = () =>{
//     this.setState({count:this.state.count+1})
//   }
//   getData = () =>{
//     //api call function
//   }
//   componentDidMount(){
//     //api data
//   }
//   render(){
//     return(
//       <div class = "App">
//         <h1> Hello Rajeswari</h1>
//         <button onClick= {this.handleClick}>count a number </button>
//         <h6>increase the number-{this.state.count}</h6>
//         <Item/>
//       </div>
//     )
//   }
// }
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World!</h1>
//     </div>
//   );
// }


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//            <code>Hi Rajeswari</code> 
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
