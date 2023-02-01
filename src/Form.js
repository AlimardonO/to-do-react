import React, { Component } from 'react'
import { FaPlus } from 'react-icons/fa';

export class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
        task: '',
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChangeHandler(e){
    this.setState({
        task: e.target.value,
    })
  }
  onSubmit(e){
    e.preventDefault();
    this.props.onAdd(this.state.task);
    this.setState({
      task: '',
  })
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input placeholder='type something' onChange={this.onChangeHandler} value={this.state.task} required/>
        <button type='submit'><FaPlus/></button>
      </form>
    )
  }
}

export default Form