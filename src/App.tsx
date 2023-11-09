import React, { useState } from 'react'
import Column from './components/Column'
import { DragDropContext } from 'react-beautiful-dnd'

function App () {
  const initialColumns = {
    Liza: {
      id: 'Liza',
      list: [{
              idTask: "1", 
              date: "26 May 2023 00:00",
              task: "Закончить проект по Frontend-разработке",
              img: "../images/Liza.jpg"
            }, 
            {
              idTask: "2", 
              date: "26 May 2023 00:00",
              task: "Закончить проект по Backend-разработке",
              img: "../images/Liza.jpg"
            }, 
            {
              idTask: "3", 
              date: "26 May 2023 00:00",
              task:"Еще одно какое то задание которое срочно нужно кому то сделать, але!",
              img: "../images/Liza.jpg"
            }]
    },
    Sveta: {
      id: 'Sveta',
      list: []
    },
    Dasha: {
      id: 'Dasha',
      list: []
    }
  }
  const [columns, setColumns] = useState(initialColumns)

  const onDragEnd = ({ source, destination }) => {
    if (destination === undefined || destination === null) return null

    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    )
      return null

    const start = columns[source.droppableId]
    const end = columns[destination.droppableId]

    if (start === end) {
      const newList = start.list.filter(
        (_: any, idx: number) => idx !== source.index
      )

      newList.splice(destination.index, 0, start.list[source.index])

      const newCol = {
        id: start.id,
        list: newList
      }

      setColumns(state => ({ ...state, [newCol.id]: newCol }))
      return null
    } else {
      const newStartList = start.list.filter(
        (_: any, idx: number) => idx !== source.index
      )

      const newStartCol = {
        id: start.id,
        list: newStartList
      }

      const newEndList = end.list

      newEndList.splice(destination.index, 0, start.list[source.index])

      const newEndCol = {
        id: end.id,
        list: newEndList
      }

      setColumns(state => ({
        ...state,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol
      }))
      return null
    }
  }


  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className='container'>
        {Object.values(columns).map(col => (
          <Column col={col} key={col.id} />
        ))}
      </div>
    </DragDropContext>
  )
}

export default App
