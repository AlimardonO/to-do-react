import React, { Component } from 'react';
export class Header extends Component {
  render() {
    return (
      <header>
        <div>
          <h2>Tasks: {this.props.allTasks}</h2>
          <h2>Favourite Tasks: {this.props.favouriteTasks}</h2>
          <h2>Done Tasks: {this.props.doneTask}</h2>
        </div>
      </header>
    )
  }
}

export default Header