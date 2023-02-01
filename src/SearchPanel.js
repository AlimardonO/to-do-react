import React, { Component } from 'react'

export class SearchPanel extends Component {
    constructor(props){
        super(props)
        this.state = {
            btns: [
                {
                    name: 'all', 
                    btnname: 'All Tasks'
                },
                {
                    name: 'favourites', 
                    btnname: 'Favourites'
                },
                {
                    name: 'donetask', 
                    btnname: 'Done tasks'
                }
            ],
        }
    }
    render() {
        return (
        <div className='searchPanel'>
            <input placeholder='Search your task' onChange={(e) => this.props.getTerm(e.target.value.toLowerCase())}/>
            <div className='filterBtn'>
                {this.state.btns.map(el => (
                    <button className={`${this.props.active === el.name ? 'active' : ''}`} key={el.name} onClick={() => this.props.updateFilterHandler(el.name)}>{el.btnname}</button>
                ))}
            </div>
        </div>
        )
    }
}

export default SearchPanel