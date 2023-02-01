import React, { Component } from 'react'
import Form from './Form';
import Header from './Header';
import Items from './Items'
import SearchPanel from './SearchPanel';

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
      term: '',
      filterName: 'all',
    }
    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onToggleProp = this.onToggleProp.bind(this);
    this.getTerm = this.getTerm.bind(this);
    this.updateFilterHandler = this.updateFilterHandler.bind(this);
  }
  searchHandler(arr, term) {
    if (arr.length === 0) {
      return arr;
    }
    return arr.filter(item => item.task.toLowerCase().indexOf(term) > -1);
  }
  getTerm(term2){
    this.setState({
      term: term2,
    })
  }
  onDelete(id) {
    this.setState(({ tasks }) => {
      return {
        tasks: tasks.filter(c => c.id !== id),
      }
    })
  }
  onAdd(task) {
    const id = this.state.tasks.length + 1, favourite = false, like = false;
    this.setState({
      tasks: [...this.state.tasks, { id, task, favourite, like}]
    })
  }
  onToggleProp(id, prop) {
    this.setState(({ tasks }) => {
      const data = tasks.map(el => {
        if (el.id === id) return { ...el, [prop]: !el[prop] }
        else return el
      })
      return {
        tasks: data,
      }
    })
  }
  filterFunc(tasks,filterName){
    switch (filterName) {
      case 'all':
        return tasks;
      case 'favourites':
        return tasks.filter(c => c.favourite)
      case 'donetask':
        return tasks.filter(c => c.like)
    }
  }
  updateFilterHandler(name){
    this.setState({
      filterName: name,
    })
  } 
  render() {
    const allTasks = this.state.tasks.length;
    const favouriteTasks = this.state.tasks.filter(el => el.favourite).length;
    const doneTask = this.state.tasks.filter(el => el.like).length;
    let filter = this.filterFunc(  this.searchHandler(this.state.tasks,this.state.term),this.state.filterName);
    return (
      <>
        <Header allTasks={allTasks} favouriteTasks={favouriteTasks} doneTask={doneTask}/>
        <SearchPanel getTerm={this.getTerm} updateFilterHandler={this.updateFilterHandler} active={this.state.filterName}/>
        <Items tasks={filter} onDelete={this.onDelete} onToggleProp={this.onToggleProp}/>
        <Form onAdd={this.onAdd} />
      </>
    )
  }
}

export default App