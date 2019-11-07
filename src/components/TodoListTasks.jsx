import React from 'react';
import TodoListTask from "./TodoListTask";


class TodoListTasks extends React.Component {
    render = () => {

        let taskItems = this.props.tasks.map((item, i) => (<TodoListTask key={i} task={item} changeStatus={this.props.changeStatus}/>));
        return (
            <div className="todoList-tasks">
                {taskItems}
            </div>
        )
    };
}

export default TodoListTasks