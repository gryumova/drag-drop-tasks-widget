import React, { Component } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import './Board.css';
import Task from './Task.jsx'


export default class Board extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            tasks: this.props.board.tasks,
        };
    };

    render() {
        return (
            <Droppable droppableId={this.state.name}>
                {provided => (
                    <div className='board'>
                        <p className='nameBoard'>{this.state.name}</p>
                        <div 
                            className='tasks'
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {this.state.tasks.map((item, index) => (
                                <Task 
                                    key={item.idTask} 
                                    item={item}
                                    index={index}
                                /> 
                            ))}
                            {provided.placeholder}
                        </div>
                    </div>
                )}
            </Droppable>
        );
    }
}