import React, { Component } from 'react'
import { FaTrash, FaCheck } from 'react-icons/fa';
import { BsFillBookmarkFill } from "react-icons/bs";
export class Items extends Component {
  render() {
    return (
      <ul>
        {this.props.tasks.map(el => (
          <li key={el.id}>
            <span className={`myid ${el.like}`}>{el.id}</span>
            <strong className={`task ${el.like}`}>{el.task}</strong>
            <BsFillBookmarkFill className={`favourite ${el.favourite}`} data-toggle="favourite" onClick={(e) => this.props.onToggleProp(el.id, e.currentTarget.getAttribute('data-toggle'))} />
            <button className='btn trashBtn' onClick={() => {this.props.onDelete(el.id)}}><FaTrash /></button>
            <button className='btn checkedBtn' data-toggle="like" onClick={(e) => this.props.onToggleProp(el.id, e.currentTarget.getAttribute('data-toggle'))}><FaCheck /></button>
          </li>
        ))}
      </ul>
    )
  }
}

export default Items