import {React,Component} from 'react'
import Item from './Item'
import { Droppable } from 'react-beautiful-dnd'
import "./Column.css"

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "#d8fcff" : "#b4d8fe",
  });

export default class Column extends Component {
    render () {
        return (
            <Droppable 
                droppableId={this.props.col.id}
            >
            {(provided, snapshot) => (
                <div className='board'>
                    <div className='nameBoard'><h2>{this.props.col.id}</h2></div>
                    <div 
                        className='tasks'
                        {...provided.droppableProps} 
                        ref={provided.innerRef}
                        style={getListStyle(snapshot.isDraggingOver)}
                    >
                        {this.props.col.list.map((text, index) => (
                            <Item key={text.idTask} text={text} index={index} />
                        ))}
                        {provided.placeholder}
                    </div>
                </div>
            )}
            </Droppable>
        )
    }
}