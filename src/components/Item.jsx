import React, { Component} from 'react'
import { Draggable } from 'react-beautiful-dnd'
import "./Item.css"


const getItemStyle = (isDragging, draggableStyle) => ({
    background: isDragging ? "#b3fcaa" : "#ffffff",
  
    // styles we need to apply on draggables
    ...draggableStyle
  });

export default class Item extends Component {
    render() {
        return (
            <Draggable 
                draggableId={this.props.text.idTask}
                index={this.props.index}
            >
            {(provided, snapshot) => (
                <div
                    className='task'
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                >
                    <div className='imgBlock'>
                        <img className='ava' 
                            src={require("../images/Liza.jpg")} 
                            alt="ava">
                        </img>
                    </div>
                    <div className='infoBlock'>
                        <div className='text'><p>{this.props.text.task}</p></div>
                        <div className='date'><p>{this.props.text.date}</p></div>
                    </div>
                </div>
            )}
            </Draggable>
        )
      }
}
