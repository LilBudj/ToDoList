import React from 'react';
import './App.css';
import TodoListHeader from "./components/TodoListHeader";
import TodoListTasks from "./components/TodoListTasks";
import TodoListFooter from './components/TodoListFooter'

class App extends React.Component {

    constructor(props){
        super(props);
    };

    state = {
        tasks : [
            {name: "CSS", isDone: true, priority: "medium"},
            {name: "JS", isDone: false, priority: "low"},
            {name: "ReactJS", isDone: false, priority: "low"},
            {name: "Patterns", isDone: true, priority: "high"},
        ],
        filterValue: "All",
    };

    addTask = (newText) => {
    let newTask = {
        name: newText,
        isDone: false,
        priority: "high"
    };
    let newTasks = [...this.state.tasks, newTask];
    this.setState({tasks: newTasks});
    };

    changeStatus = (task, isDone) => {

        let newTasks = this.state.tasks.map(t => {
            if (t != task){
                return t;
            }
            else {
                return {...t, isDone: isDone};
            }
        });

        this.setState(
            {tasks: newTasks}
        )
    };

    changeFilter = (newFilterValue) => {
      this.setState(
          {
              filterValue: newFilterValue,
          }
      )
    };

    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader addTask={this.addTask}/>
                    <TodoListTasks tasks={this.state.tasks.filter(t =>{
                        switch(this.state.filterValue){
                            case "All":
                                return true;
                            break;
                            case "Active":
                                return (t.isDone === false);
                            break;
                            case "Completed":
                                return (t.isDone === true);
                            break;
                        }
                    })} changeStatus={this.changeStatus}/>
                    <TodoListFooter filterValue={this.state.filterValue} changeFilter={this.changeFilter}/>
                </div>
            </div>
        );
    }
}

export default App;

