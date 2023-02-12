import React, { Component } from 'react'


class Todo extends Component {
  constructor(){
    super()
    this.state = {
    tasks : [{task:"Check Account Stat",id:1},{task:"Time Table",id:2},{task:"Bathe",id:3}]
    }
 }

  handleChange=(e)=>{
    console.log(e.target.value)
    this.setState({
        current_task: e.target.value
    })
  }

  handleSubmit =()=>{
    this.setState({
        tasks:[...this.state.tasks,{task:this.state.current_task,id:this.state.tasks.length}],
        current_task:''
    })
    console.log(this.state.tasks[this.state.tasks.length].id)
  }

  handleDelete=(id)=>{
    let nurr = this.state.tasks.filter((taskObj)=>{
        return taskObj.id!=id
    })
    this.setState({
        tasks:[...nurr]
    })
  }

  render() {
    return (
      <div>
        <input type = 'text' onChange={this.handleChange}></input>
        <button onClick={this.handleSubmit}>Submit</button>
        <ul>
        {
            this.state.tasks.map((taskObj)=>(
                <li key={taskObj.id}>
                    <p>{taskObj.task}</p>
                    <button onClick={()=>this.handleDelete(taskObj.id)}>Delete</button>
                </li>
            ))
        }
        </ul>
      </div>
    )
  }
}

export default Todo;

 