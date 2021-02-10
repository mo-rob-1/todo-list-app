import React from 'react';

import './TodoList.css';

class TodoList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        newItem: "",
        list: []
      };
    }
  
    updateInput(key, value) {
      // update react state
      this.setState({ [key]: value });
    }
  
    addItem() {
      // create a new item with unique id
      const newItem = {
        id: 1 + Math.random(),
        value: this.state.newItem.slice()
      };
  
      // copy current list of items
      const list = [...this.state.list];
  
      // add the new item to the list
      list.push(newItem);
  
      // update state with new list, reset the new item input
      this.setState({
        list,
        newItem: ""
      });
    }
  
    deleteItem(id) {
      // copy current list of items
      const list = [...this.state.list];
      // filter out the item being deleted
      const updatedList = list.filter(item => item.id !== id);
  
      this.setState({ list: updatedList });
    }
    
    render() {
      return (
          <div className="TodoList">
            <input type="text" placeholder="Add Item" value={this.state.newItem} onChange={e => this.updateInput("newItem", e.target.value)}/>
            <button onClick={() => this.addItem()} disabled={!this.state.newItem.length}>+</button>

            <ul>
              {this.state.list.map(item => {
                return (
                  <li key={item.id}>
                    {item.value}
                    <button onClick={() => this.deleteItem(item.id)}>x</button>
                  </li>
                );
              })}
            </ul>
        </div>
      );
    }
  }
  
  export default TodoList;