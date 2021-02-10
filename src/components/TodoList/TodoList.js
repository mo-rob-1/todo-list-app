import React, { Component } from 'react';

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state={
            newItem: "",
            list: []
        }
    }

    render () {
        return (
            <div className="TodoList">
                
            </div>
        );
    }
}

export default TodoList;