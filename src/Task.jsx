import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './Task.css';

export default class Task extends Component {
    render() {
        return (
             <Draggable
                draggableId={this.props.item.idTask} 
                index={this.props.index}
            >
                {provided => (
                    <div
                        className='task'
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <div className='imgBlock'>
                             <img className='ava' src={require("./ava.jpg")}></img>
                        </div>
                        <div className='infoBlock'>
                            <div className='textTask'><p>{this.props.item.task}</p></div>
                            <div className='dateTask'><p>{this.props.item.date}</p></div>
                        </div>
                    </div>
                )}
            </Draggable>
        );
    }
};