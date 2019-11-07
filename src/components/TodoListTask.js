import React from 'react';

class TodoListTask extends React.Component{

    onISDoneChanged = (event) =>{

        this.props.changeStatus(this.props.task, event.currentTarget.checked);
    };

    render = () =>{
        return(
        <div className="todoList-task">
            <input type="checkbox" checked={this.props.task.isDone} onChange={this.onISDoneChanged}/>
            <span>{this.props.task.name}, priority: {this.props.task.priority}</span>
        </div>
    )};
}

export default TodoListTask